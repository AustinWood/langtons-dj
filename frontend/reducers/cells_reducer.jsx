import merge from 'lodash/merge';
import { RESET, HOVER, UPDATE_GRID, SAVE_NEXT_GRID } from '../actions/actions';

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
      newState.nextCells = null;
      return newState;
    case HOVER:
      const x = action.pos.x || null;
      const y = action.pos.y || null;
      newState.hoverPos = { x: x, y: y };
      return newState;
    default:
      return state;
  }
};

export default CellsReducer;
