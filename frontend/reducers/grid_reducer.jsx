import merge from 'lodash/merge';
import { TOGGLE_ANT } from '../actions/actions';

const gridSize = 20;

// import { Rect } from 'react-konva';
// color: Konva.Util.getRandomColor()
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
    console.log([output]);
    return output;
  }()),
  cellSize: 35
});

const GridReducer = (state = _grid, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    // case TOGGLE_ANT:
    //   newState = merge({}, state);
    //   newState.cells[action.y][action.x].color = "red";
    //   return newState;
    default:
      return state;
  }
};

export default GridReducer;
