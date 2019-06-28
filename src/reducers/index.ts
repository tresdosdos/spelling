import {combineReducers} from 'redux';
import wordReducer from './word';

export default combineReducers({
  word: wordReducer,
})
