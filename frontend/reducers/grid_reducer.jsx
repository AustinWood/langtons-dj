import merge from 'lodash/merge';
import { Rect } from 'react-konva';

const gridSize = 20;

const _grid = Object.freeze({

  cells: (function() {
    let output = [];
    for (var i = 0; i < gridSize; i++) {
      let row = [];
      for (var j = 0; j < gridSize; j++) {
        row.push({x: j, y: i, color: Konva.Util.getRandomColor()});
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
    // case "ADD_NOTE":
    //   newState = {
    //     studyMode: false,
    //     editMode: true,
    //     footerType: 'edit'
    //   };
    //   return merge({}, state, newState);
    default:
      return state;
  }
};

export default GridReducer;
