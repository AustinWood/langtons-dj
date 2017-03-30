import merge from 'lodash/merge';
import { TOGGLE_ANT, INCREMENT_STEP } from '../actions/actions';

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
  cellSize: 35,
  ants: {}
});

const GridReducer = (state = _grid, action) => {
  Object.freeze(state);
  let newState = {ants: {}};
  switch(action.type) {
    case TOGGLE_ANT:
      const id = `x${action.x}y${action.y}`;
      if (state.ants[id]) {
        newState = merge({}, state);
        delete newState.ants[id];
        return newState;
      } else {
        newState.ants[id] = {
          antId: id,
          x_0: action.x, y_0: action.y, dir_0: 'r',
          x: action.x, y: action.y, dir: 'r',
          musical_attrs: null
        };
        return merge({}, state, newState);
      }
    case INCREMENT_STEP:
      newState = merge({}, state);
      for (var key in newState.ants) {
        if (newState.ants.hasOwnProperty(key)) {
          // change cell state
          newState.cells[newState.ants[key].y][newState.ants[key].x] = 1;
          // move ant
          newState.ants[key].x += 1;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default GridReducer;
