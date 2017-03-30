import { combineReducers } from 'redux';
import GridReducer from './grid_reducer';
import AntReducer from './ant_reducer';

const RootReducer = combineReducers({
  grid: GridReducer,
  ants: AntReducer
});

export default RootReducer;
