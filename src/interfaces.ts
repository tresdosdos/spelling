import {Action} from 'redux';

export interface IAction<T, S> extends Action<T> {
  payload: S;
}

export interface IWord {
  word: string,
}
