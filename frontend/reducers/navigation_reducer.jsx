// import {
//   ADD_NOTE, SELECT_NOTE, TOGGLE_SEARCH,
//   STUDY, REVEAL_ANSWER, EXIT_STUDY, EDIT_NOTE, HIDE_SOLUTION } from '../actions/navigation_actions';
// import { NEXT_QUESTION, LOG_CODE, FINISH_STUDYING, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const _navigation = Object.freeze({
  studyMode: false,
  editMode: false,
  footerType: null // edit, ask, answer, null
});

const NavigationReducer = (state = _navigation, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case "ADD_NOTE":
      newState = {
        studyMode: false,
        editMode: true,
        footerType: 'edit'
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default NavigationReducer;
