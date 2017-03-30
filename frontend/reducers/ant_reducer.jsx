import merge from 'lodash/merge';
import { TOGGLE_ANT, INCREMENT_STEP } from '../actions/actions';

const _ants = {};

const AntReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    // case TOGGLE_ANT:
    //   const id = `x${action.x}y${action.y}`;
    //   if (state[id]) {
    //     newState = merge({}, state);
    //     delete newState[id];
    //     return newState;
    //   } else {
    //     newState[id] = {
    //       antId: id,
    //       x_0: action.x, y_0: action.y, dir_0: 'r',
    //       x: action.x, y: action.y, dir: 'r',
    //       musical_attrs: null
    //     };
    //     return merge({}, state, newState);
    //   }
    // case INCREMENT_STEP:
    //   newState = merge({}, state);
    //   for (var key in newState) {
    //     if (newState.hasOwnProperty(key)) {
    //       newState[key].x += 1;
    //     }
    //   }
    //   return newState;
    default:
      return state;
  }
};

export default AntReducer;
