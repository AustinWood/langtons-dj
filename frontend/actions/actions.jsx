export const TOGGLE_ANT = "TOGGLE_ANT";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const RESET = "RESET";
export const HOVER = "HOVER";
export const UPDATE_GRID = "UPDATE_GRID";
export const SAVE_NEXT_GRID = "SAVE_NEXT_GRID";

export const toggleAnt = (x, y) => {
  console.log("ACTIONS.jsx toggleAnt");
  return ({ type: TOGGLE_ANT, x, y });
};

export const saveNextGrid = (cells, ants, music) => {
  return ({ type: SAVE_NEXT_GRID, cells, ants, music });
};

export const togglePlay = () => {
  return ({ type: TOGGLE_PLAY });
};

export const reset = () => {
  return ({ type: RESET });
};

export const hover = (x, y) => {
  return ({ type: HOVER, x, y });
};

export const updateGrid = () => {
  return ({ type: UPDATE_GRID });
};
