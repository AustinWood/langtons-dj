import merge from 'lodash/merge';

import {
  UPDATE_GRID, RESET,
  TOGGLE_PLAY, CLOSE_OVERLAY
} from '../actions/actions';

const _controls = Object.freeze({
  stepCount: 0,
  isPlaying: false,
  overlayHidden: false
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
      newState.overlayHidden = true;
      return newState;

    case CLOSE_OVERLAY:
      newState.overlayHidden = true;
      return newState;

    default:
      return state;
  }
};

export default ControlsReducer;
