import merge from 'lodash/merge';
const _slowBox = [false, false, false, true, true]
const _rules = Object.freeze({
  0: {
    color: '#197be0', // blue
    rotateRight: true
  },
  1: {
    color: "#7ed43a", // green
    rotateRight: false
  },
  2: {
    color: "#fc2a68", // pink
    rotateRight: true
  },
  3: {
    color: "#8c54e5", // purple
    rotateRight: true
  },
  4: {
    color: "#f9cd35", // yellow
    rotateRight: true
  }
});

const RulesReducer = (state = _rules, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    default:
      return state;
  }
};

export default RulesReducer;
