import {ITaskButton} from '../../interfaces';

export interface ITask extends ITaskButton {
  word: string;
}

export interface ITaskState {
  tasks: ITask[];
}

export enum TaskActionTypes {
  SET_TASKS = 'SET_TASKS',
  PUSH_TASK = 'PUSH_TASK',
  SET_STATUS = 'SET_STATUS',
}
