import {combineReducers} from 'redux';
import spinnerReducer from './spinner';
import taskReducer from './task';

export default combineReducers({
  spinner: spinnerReducer,
  task: taskReducer,
})
