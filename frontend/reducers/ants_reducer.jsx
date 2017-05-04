import merge from 'lodash/merge';

import {
  UPDATE_GRID, SAVE_NEXT_GRID, RESET,
  TOGGLE_ANT, CHANGE_RHYTHM
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
      console.log(action);
      const pos = action.pos;
      const id = `x${pos.x}y${pos.y}`;
      if (state[id]) {
        delete newState[id];
        return newState;
      }
      const antCount = Object.keys(state).length;
      if (antCount === 4) {
        return state;
      }
      const initialRhythmMap = { 0:2, 1:4, 2:8, 3:16 };
      const newAnt = {
        id: id,
        initialState: { pos: pos, dir: 'r' },
        currentState: { pos: pos, dir: 'r' },
        nextState: { pos: pos, dir: 'r' },
        rhythm: initialRhythmMap[antCount],
        number: antCount
      };
      newState[id] = newAnt;
      return newState;

    case CHANGE_RHYTHM:
      const rhythmMap = { 0:1, 1:2, 2:4, 4:8, 8:16, 16:0 };
      let currentRhythm = newState[action.antId].rhythm;
      let newRhythm = rhythmMap[currentRhythm];
      newState[action.antId].rhythm = newRhythm;
      return newState;

    default:
      return state;
  }
};

export default AntsReducer;
