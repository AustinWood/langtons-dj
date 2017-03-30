import merge from 'lodash/merge';
import { TOGGLE_ANT } from '../actions/actions';

// const generateId = () => {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (let i = 0; i < 5; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// };

// const _ants = Object.freeze({
//   ants: []
// });
const _ants = {};

const AntReducer = (state = _ants, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case TOGGLE_ANT:
      const id = `x${action.x}y${action.y}`;
      if (state[id]) {
        console.log(`BEFORE:`);
        console.log(state);
        newState = merge({}, state);
        console.log(newState.id);
        delete newState[id];
        console.log(`AFTER:`);
        console.log(newState);
        return newState;
      } else {
        newState[id] = {
          antId: id,
          x_0: action.x, y_0: action.y, dir_0: 'r',
          x: action.x, y: action.y, dir: 'r',
          musical_attrs: null
        };
        return merge({}, state, newState);
      }
    default:
      return state;
  }
};

export default AntReducer;
