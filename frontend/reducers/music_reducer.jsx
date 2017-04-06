import merge from 'lodash/merge';
import { UPDATE_GRID, SAVE_NEXT_GRID } from '../actions/actions';

const _music = {
  chord: []
};

const AntReducer = (state = _music, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    // case UPDATE_GRID:
    //   newState.currentChord = state.nextChord;
    //   return newState;
    case SAVE_NEXT_GRID:
      newState.chord = action.music;
      return newState;
    default:
      return state;
  }
};

export default AntReducer;
