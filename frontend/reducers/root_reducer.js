import { combineReducers } from 'redux';
import GridReducer from './grid_reducer';
import ControlsReducer from './controls_reducer';
import RulesReducer from './rules_reducer';

const RootReducer = combineReducers({
  grid: GridReducer,
  controls: ControlsReducer,
  rules: RulesReducer
});

export default RootReducer;
