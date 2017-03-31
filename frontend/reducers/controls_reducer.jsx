import merge from 'lodash/merge';
import { INCREMENT_STEP } from '../actions/actions';

const _controls = Object.freeze({
  stepCount: 0
});

const GridReducer = (state = _controls, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case INCREMENT_STEP:
      newState = merge({}, state);
      newState.stepCount += 1;
      return newState;
    default:
      return state;
  }
};

export default GridReducer;
