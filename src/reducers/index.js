import { combineReducers } from 'redux';
import userReducer from './user';
import objectReducer from './object';

const rootReducer = combineReducers({
  user: userReducer,
  object: objectReducer,
});

export default rootReducer;
