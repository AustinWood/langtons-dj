import merge from 'lodash/merge';
import { SAVE_NEXT_GRID } from '../actions/actions';

const _music = {
  chord: []
};

const AntReducer = (state = _music, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case SAVE_NEXT_GRID:
      newState.chord = action.music;
      return newState;
    default:
      return state;
  }
};

export default AntReducer;
