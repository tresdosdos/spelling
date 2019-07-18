import {combineReducers} from 'redux';
import spinnerReducer from './spinner';
import taskReducer from './task';
import answerReducer from './answer';

export default combineReducers({
  spinner: spinnerReducer,
  task: taskReducer,
  answer: answerReducer,
})
