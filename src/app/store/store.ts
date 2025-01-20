import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
	reducer: rootReducer
});

type AppStore = typeof store;
type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
