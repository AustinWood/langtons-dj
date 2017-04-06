import merge from 'lodash/merge';
import { SAVE_NEXT_GRID } from '../actions/actions';

const _music = {
  cellStates: [0, 0, 0, 0]
};

const AntReducer = (state = _music, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case SAVE_NEXT_GRID:
      return action.music;
    default:
      return state;
  }
};

export default AntReducer;
