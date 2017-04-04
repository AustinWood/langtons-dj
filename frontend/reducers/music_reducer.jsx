import merge from 'lodash/merge';
import { INCREMENT_STEP } from '../actions/actions';

const _music = {
  cellStates: [0, 0, 0, 0]
};

const AntReducer = (state = _music, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case INCREMENT_STEP:
      console.log(action.music);
      return action.music;
    default:
      return state;
  }
};

export default AntReducer;
