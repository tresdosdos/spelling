import {Action} from 'redux';
import {ISpinnerState} from 'reducers/spinner/interfaces';
import {ITaskState} from 'reducers/task/interfaces';

export interface IAction<T, S> extends Action<T> {
  payload: S;
}

export interface IWord {
  word: string;
}

export interface IRootState {
  spinner: ISpinnerState;
  task: ITaskState;
}

export enum TaskButtonStatus {
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  CURRENT = 'CURRENT',
}

export interface ITaskButton {
  id: number;
  num: number;
  status: TaskButtonStatus;
}
