import merge from 'lodash/merge';
import { INCREMENT_STEP, TOGGLE_PLAY, RESET, UPDATE_GRID } from '../actions/actions';

const _controls = Object.freeze({
  stepCount: 0,
  isPlaying: false
});

const ControlsReducer = (state = _controls, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case UPDATE_GRID:
      newState.stepCount += 1;
      return newState;
    case TOGGLE_PLAY:
      newState.isPlaying = !newState.isPlaying;
      return newState;
    case RESET:
      newState.isPlaying = false;
      return newState;
    default:
      return state;
  }
};

export default ControlsReducer;
