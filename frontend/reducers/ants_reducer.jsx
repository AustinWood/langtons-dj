import merge from 'lodash/merge';

import {
  UPDATE_GRID, SAVE_NEXT_GRID, RESET,
  TOGGLE_ANT
} from '../actions/actions';

const _ants = {};

const AntsReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {

    case UPDATE_GRID:
      for (var key in newState) {
        if (newState.hasOwnProperty(key)) {
          newState[key].currentState = newState[key].nextState;
        }
      }
      return newState;

    case SAVE_NEXT_GRID:
      return action.ants;

    case RESET:
      for (var key in newState) {
        if (newState.hasOwnProperty(key)) {
          let ant = newState[key];
          ant.currentState = ant.initialState;
          ant.nextState = ant.initialState;
          newState[key] = ant;
        }
      }
      return newState;

    case TOGGLE_ANT:
      const pos = action.pos;
      const id = `x${pos.x}y${pos.y}`;
      if (state[id]) {
        delete newState[id];
        return newState;
      }
      if (Object.keys(state).length === 4) {
        return state;
      }
      const newAnt = {
        id: id,
        initialState: { pos: pos, dir: 'r' },
        currentState: { pos: pos, dir: 'r' },
        nextState: { pos: pos, dir: 'r' },
        rhythm: 4
      };
      newState[id] = newAnt;
      return newState;

    default:
      return state;
  }
};

export default AntsReducer;
