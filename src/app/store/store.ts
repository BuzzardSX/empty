import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { middleware } from '../../api/emptyApi';
import rootReducer from './reducer';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware)
});

type AppStore = typeof store;

type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
