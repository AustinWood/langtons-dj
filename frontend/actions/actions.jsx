export const TOGGLE_ANT = "TOGGLE_ANT";
export const toggleAnt = (x, y) => {
  return ({ type: TOGGLE_ANT, x, y });
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
export const hover = (x, y) => {
  return ({ type: HOVER, x, y });
};

export const UPDATE_GRID = "UPDATE_GRID";
export const updateGrid = () => {
  return ({ type: UPDATE_GRID });
};

export const SAVE_NEXT_GRID = "SAVE_NEXT_GRID";
export const saveNextGrid = (cells, ants, music) => {
  return ({ type: SAVE_NEXT_GRID, cells, ants, music });
};
