export const TOGGLE_ANT = "TOGGLE_ANT";
export const INCREMENT_STEP = "INCREMENT_STEP";

export const toggleAnt = (x, y) => {
  console.log(`received x: ${x},  y: ${y}`);
  return ({ type: TOGGLE_ANT, x, y });
};

export const incrementStep = () => {
  console.log('incrementStep in actions.jsx');
  return ({ type: INCREMENT_STEP });
};
