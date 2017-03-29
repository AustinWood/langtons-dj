import merge from 'lodash/merge';

const _grid = Object.freeze({
  cells: [
    [{x: 0, y: 0, color: 'green'}, {x: 1, y: 0, color: 'red'}],
    [{x: 3, y: 4, color: 'blue'}]
  ],
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
