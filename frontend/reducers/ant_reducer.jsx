import merge from 'lodash/merge';
import { TOGGLE_ANT, INCREMENT_STEP, RESET } from '../actions/actions';

const _ants = {};

const AntReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case TOGGLE_ANT:
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
      return merge({}, state, action.ants);
    case RESET:
      newState = merge({}, state);
      for (var key in newState) {
        if (newState.hasOwnProperty(key)) {
          let ant = newState[key];
          ant.x = ant.x_0;
          ant.y = ant.y_0;
          ant.dir = ant.dir_0;
          newState[key] = ant;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default AntReducer;
