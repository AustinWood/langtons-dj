import merge from 'lodash/merge';
import { TOGGLE_ANT, RESET, HOVER, UPDATE_GRID, SAVE_NEXT_GRID } from '../actions/actions';

const gridSize = 20;

const _grid = Object.freeze({
  currentCells: (function() {
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
  nextCells: null,
  cellSize: 35,
  hover: { x: null, y: null }
});

const CellsReducer = (state = _grid, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case UPDATE_GRID:
      console.log("UPDATE_GRID");
      console.log(state.nextCells);
      newState.currentCells = state.nextCells;
      return newState;
    case SAVE_NEXT_GRID:
      console.log("SAVE_NEXT_GRID");
      console.log(action.cells);
      newState.nextCells = action.cells;
      return newState;
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

export default CellsReducer;
