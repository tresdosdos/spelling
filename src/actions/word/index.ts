import {IWord} from '../../interfaces';
import {IAddWordAction, IDeleteWordAction} from './interfaces';
import {WordsActions} from '../../reducers/word/interfaces';

export function addWord(word: IWord): IAddWordAction {
  return {
    type: WordsActions.ADD_WORD,
    payload: word,
  }
}

export function deleteWord(): IDeleteWordAction {
  return {
    type: WordsActions.DEL_WORD,
  }
}
