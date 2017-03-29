import { combineReducers } from 'redux';
import GridReducer from './grid_reducer';

const RootReducer = combineReducers({
  grid: GridReducer
});

export default RootReducer;
