export const TOGGLE_ANT = "TOGGLE_ANT";
export const INCREMENT_STEP = "INCREMENT_STEP";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const RESET = "RESET";
export const HOVER = "HOVER";

export const toggleAnt = (x, y) => {
  return ({ type: TOGGLE_ANT, x, y });
};

export const incrementStep = (cells, ants, music) => {
  return ({ type: INCREMENT_STEP, cells, ants, music });
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
