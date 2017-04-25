export const TOGGLE_ANT = "TOGGLE_ANT";
export const toggleAnt = (pos) => {
  return ({ type: TOGGLE_ANT, pos });
};

export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const togglePlay = () => {
  return ({ type: TOGGLE_PLAY });
};

export const RESET = "RESET";
export const reset = () => {
  return ({ type: RESET });
};

export const HOVER = "HOVER";
export const hover = (pos) => {
  return ({ type: HOVER, pos });
};

export const UPDATE_GRID = "UPDATE_GRID";
export const updateGrid = () => {
  return ({ type: UPDATE_GRID });
};

export const SAVE_NEXT_GRID = "SAVE_NEXT_GRID";
export const saveNextGrid = (cells, ants, music) => {
  return ({ type: SAVE_NEXT_GRID, cells, ants, music });
};

export const CHANGE_TEMPO = "CHANGE_TEMPO";
export const changeTempo = (tempo) => {
  return ({ type: CHANGE_TEMPO, tempo });
};

export const CHANGE_VOLUME = "CHANGE_VOLUME";
export const changeVolume = (volume) => {
  return ({ type: CHANGE_VOLUME, volume });
};

export const SELECT_NOTE_COLLECTION = "SELECT_NOTE_COLLECTION";
export const selectNoteCollection = (int) => {
  return ({ type: SELECT_NOTE_COLLECTION, int });
};
