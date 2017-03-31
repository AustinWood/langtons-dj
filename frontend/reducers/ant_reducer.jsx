import merge from 'lodash/merge';
import { TOGGLE_ANT, INCREMENT_STEP } from '../actions/actions';

const _ants = {};

const AntReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case TOGGLE_ANT:
      console.log(action);
      newState = merge({}, state);
      const id = `x${action.x}y${action.y}`;
      if (state[id]) {
        delete newState[id];
        return newState;
      } else {
        newState[id] = {
          antId: id,
          x_0: action.x, y_0: action.y, dir_0: 'r',
          x: action.x, y: action.y, dir: 'r',
          musical_attrs: null
        };
        return newState;
      }
    case INCREMENT_STEP:
    console.log('-----------');
      console.log('INCREMENT_STEP in ants reducer');
      console.log(action);
      console.log(action.ants);
      return merge({}, state, action.ants);
    default:
      return state;
  }
};

export default AntReducer;
