import merge from 'lodash/merge';
import { TOGGLE_ANT, INCREMENT_STEP, RESET } from '../actions/actions';

const gridSize = 20;

const _grid = Object.freeze({
  cells: (function() {
    let output = [];
    for (var i = 0; i < gridSize; i++) {
      let row = [];
      for (var j = 0; j < gridSize; j++) {
        row.push({x: j, y: i, state: null});
      }
      output.push(row);
    }
    return output;
  }()),
  cellSize: 35
});

const GridReducer = (state = _grid, action) => {
  Object.freeze(state);
  switch(action.type) {
    case INCREMENT_STEP:
      return merge({}, state, {cells: action.cells});
    case RESET:
      return _grid;
    default:
      return state;
  }
};

export default GridReducer;
