export const TOGGLE_ANT = "TOGGLE_ANT";

export const toggleAnt = (x, y) => {
  console.log(`received x: ${x},  y: ${y}`);
  return ({ type: TOGGLE_ANT, x, y });
};
