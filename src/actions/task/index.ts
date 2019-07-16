import {
  IPushTaskAction,
  ISetCurrentTaskAction,
  ISetDefaultTaskAction,
  ISetPendingTaskAction,
  ISetTaskAction
} from './interfaces';
import {ITask, TaskActionTypes} from 'reducers/task/interfaces';

export const setTasks = (tasks: ITask[]): ISetTaskAction => ({
  type: TaskActionTypes.SET_TASKS,
  payload: tasks,
});

export const pushTask = (task: ITask): IPushTaskAction => ({
  type: TaskActionTypes.PUSH_TASK,
  payload: task,
});

export const setPending = (id: number): ISetPendingTaskAction => ({
  type: TaskActionTypes.SET_PENDING,
  payload: id,
});

export const setCurrent = (id: number): ISetCurrentTaskAction => ({
  type: TaskActionTypes.SET_CURRENT,
  payload: id,
});

export const setDefault = (): ISetDefaultTaskAction => ({
  type: TaskActionTypes.SET_DEFAULT,
});
