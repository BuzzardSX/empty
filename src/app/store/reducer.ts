import { combineSlices } from '@reduxjs/toolkit';
import home from '../../features/home';

const rootReducer = combineSlices(home);

export default rootReducer;
