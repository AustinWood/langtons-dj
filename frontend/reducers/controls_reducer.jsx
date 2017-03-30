import merge from 'lodash/merge';
import { INCREMENT_STEP } from '../actions/actions';

const _controls = Object.freeze({
  step: 0
});

const GridReducer = (state = _controls, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case INCREMENT_STEP:
      newState = merge({}, state);
      newState.step += 1;
      console.log(newState.step);
      return newState;
    default:
      return state;
  }
};

export default GridReducer;
