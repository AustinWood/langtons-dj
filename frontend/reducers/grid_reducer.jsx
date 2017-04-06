import merge from 'lodash/merge';
import { RESET, HOVER } from '../actions/actions';

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
  cellSize: 35,
  hover: { x: null, y: null }
});

const GridReducer = (state = _grid, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RESET:
      for (let i = 0; i < newState.cells.length; i++) {
        for (let j = 0; j < newState.cells[i].length; j++) {
          newState.cells[i][j].state = null;
        }
      }
      return newState;
    case HOVER:
      newState.hover = { x: action.x, y: action.y };
      return newState;
    default:
      return state;
  }
};

export default GridReducer;
