import merge from 'lodash/merge';
// import { INCREMENT_STEP } from '../actions/actions';

const _rules = Object.freeze({
  0: {
    color: '#197be0', // #282c34
    rotateRight: true
  },
  1: {
    color: "#7ed43a",
    rotateRight: false
  },
  2: {
    color: "#fc2a68",
    rotateRight: false
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
