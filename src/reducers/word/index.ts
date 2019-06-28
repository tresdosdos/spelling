import {ActionType} from 'typesafe-actions';
import * as actions from '../../actions/word';
import {IWordState, WordsActions} from './interfaces';

type IWordActions = ActionType<typeof actions>;
const initialState: IWordState = {
  word: '',
};

export default function WordReducer(state = initialState, action: IWordActions) {
  switch (action.type) {
    case WordsActions.ADD_WORD: {
      return {...state, word: action.payload.word};
    }
    case WordsActions.DEL_WORD: {
      return {...state, word: ''};
    }
    default: {
      return state;
    }
  }
}
