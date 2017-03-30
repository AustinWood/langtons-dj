export const TOGGLE_ANT = "TOGGLE_ANT";
export const INCREMENT_STEP = "INCREMENT_STEP";

export const toggleAnt = (x, y) => {
  return ({ type: TOGGLE_ANT, x, y });
};

export const incrementStep = () => {
  return ({ type: INCREMENT_STEP });
};
