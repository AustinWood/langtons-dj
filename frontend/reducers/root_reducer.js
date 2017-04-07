import { combineReducers } from 'redux';
import CellsReducer from './cells_reducer';
import AntsReducer from './ants_reducer';
import ControlsReducer from './controls_reducer';
import RulesReducer from './rules_reducer';
import MusicReducer from './music_reducer';

const RootReducer = combineReducers({
  cells: CellsReducer,
  ants: AntsReducer,
  controls: ControlsReducer,
  rules: RulesReducer,
  music: MusicReducer
});

export default RootReducer;
