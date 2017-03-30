import merge from 'lodash/merge';
import { TOGGLE_ANT } from '../actions/actions';

const gridSize = 20;

// const _ants = Object.freeze({
//   ants: []
// });
const _ants = [];

const AntReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case TOGGLE_ANT:
      console.log(action);
      // console.log(state.grid.cells[2][0].color);

      newState = merge({}, state);
      newState.cells[action.y][action.x].color = "red";
      return state;
    default:
      return state;
  }
};

export default AntReducer;
