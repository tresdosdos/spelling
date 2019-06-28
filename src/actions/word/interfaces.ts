import {IAction, IWord} from '../../interfaces';
import {WordsActions} from '../../reducers/word/interfaces';
import {Action} from 'redux';

export type IAddWordAction = IAction<WordsActions.ADD_WORD, IWord>;
export type IDeleteWordAction = Action<WordsActions.DEL_WORD>;
