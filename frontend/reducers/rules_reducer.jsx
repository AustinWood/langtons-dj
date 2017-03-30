import merge from 'lodash/merge';
// import { INCREMENT_STEP } from '../actions/actions';

const _rules = Object.freeze({
  0: {
    color: '#282c34',
    rotateRight: true
  },
  1: {
    color: '#E3F2FC',
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
