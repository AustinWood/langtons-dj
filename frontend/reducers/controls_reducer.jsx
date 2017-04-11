import merge from 'lodash/merge';

import {
  UPDATE_GRID, RESET,
  TOGGLE_PLAY
} from '../actions/actions';

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

    case RESET:
      newState.isPlaying = false;
      return newState;

    case TOGGLE_PLAY:
      newState.isPlaying = !newState.isPlaying;
      return newState;

    default:
      return state;
  }
};

export default ControlsReducer;
