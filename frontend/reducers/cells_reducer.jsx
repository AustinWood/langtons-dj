import merge from 'lodash/merge';

import { UPDATE_GRID, SAVE_NEXT_GRID, RESET, HOVER } from '../actions/actions';

const _cellSize = 35;
const _gridSize = 20;

const _initialCells = function() {
  let output = [];
  for (var i = 0; i < _gridSize; i++) {
    let row = [];
    for (var j = 0; j < _gridSize; j++) {
      row.push({ x: j, y: i, state: null });
    }
    output.push(row);
  }
  return output;
}();

const _cells = Object.freeze({
  currentCells: _initialCells,
  nextCells: null,
  cellSize: _cellSize,
  hoverPos: { x: null, y: null }
});

const CellsReducer = (state = _cells, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {

    case UPDATE_GRID:
      newState.currentCells = state.nextCells;
      return newState;

    case SAVE_NEXT_GRID:
      newState.nextCells = action.cells;
      return newState;

    case RESET:
      for (let i = 0; i < newState.currentCells.length; i++) {
        for (let j = 0; j < newState.currentCells[i].length; j++) {
          newState.currentCells[i][j].state = null;
        }
      }
      newState.nextCells = newState.currentCells;
      return newState;

    case HOVER:
      let x = null;
      let y = null;
      if (x >= 0 && y >= 0) {
        x = action.pos.x;
        y = action.pos.y;
      }
      newState.hoverPos = { x: x, y: y };
      console.log(x);
      return newState;

    default:
      return state;
  }
};

export default CellsReducer;
