import { combineSlices } from '@reduxjs/toolkit';
import emptyApi from '../../api/emptyApi';
import home from '../../features/home';

const rootReducer = combineSlices(emptyApi, home);

export default rootReducer;
