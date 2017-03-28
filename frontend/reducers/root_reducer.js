import { combineReducers } from 'redux';
import NavigationReducer from './navigation_reducer';

const RootReducer = combineReducers({
  navigation: NavigationReducer
});

export default RootReducer;
