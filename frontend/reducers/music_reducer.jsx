import merge from 'lodash/merge';
import {
  SAVE_NEXT_GRID,
  CHANGE_TEMPO,
  CHANGE_VOLUME } from '../actions/actions';
import { notes } from '../components/sequencer/notes';

const _music = {
  chord: [],
  tempo: 120,
  volume: 0,
  notes: notes[0].notes
};

const AntReducer = (state = _music, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {

    case SAVE_NEXT_GRID:
      newState.chord = action.music;
      return newState;

    case CHANGE_TEMPO:
      newState.tempo = action.tempo;
      return newState;

    case CHANGE_VOLUME:
      console.log(action);
      newState.volume = action.volume;
      return newState;

    default:
      return state;
  }
};

export default AntReducer;
