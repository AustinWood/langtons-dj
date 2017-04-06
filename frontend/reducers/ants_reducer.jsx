import merge from 'lodash/merge';
import { TOGGLE_ANT, RESET, UPDATE_GRID } from '../actions/actions';

const _ants = {
  currentAnts: {},
  nextAnts: {}
};

const AntsReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case UPDATE_GRID:
      newState.currentAnts = state.nextAnts;
      return newState;
    case TOGGLE_ANT:
      newState = merge({}, state);
      const id = `x${action.x}y${action.y}`;
      if (state.currentAnts[id]) {
        delete newState.currentAnts[id];
        if (state.nextAnts[id]) {
          delete newState.nextAnts[id];
        }
        return newState;
      } else {
        const newAnt = {
          antId: id,
          x_0: action.x, y_0: action.y, dir_0: 'r',
          x: action.x, y: action.y, dir: 'r',
          musical_attrs: null
        };
        newState.currentAnts[id] = newAnt;
        newState.nextAnts[id] = newAnt;
        return newState;
      }
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

export default AntsReducer;
