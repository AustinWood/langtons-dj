import merge from 'lodash/merge';

const _grid = Object.freeze({
  cells: [[[0, 0, 'green'], [1, 0, 'red']], [[3, 4, 'blue']]],
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
