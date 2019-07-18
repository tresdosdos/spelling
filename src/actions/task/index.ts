import {ITask, TaskActionTypes} from 'reducers/task/interfaces';
import {IPushTaskAction, ISetStatusAction, ISetTaskAction} from './interfaces';
import {ITaskStatus, TaskButtonStatus} from '../../interfaces';

export const setTasks = (tasks: ITask[]): ISetTaskAction => ({
  type: TaskActionTypes.SET_TASKS,
  payload: tasks,
});

export const pushTask = (task: ITask): IPushTaskAction => ({
  type: TaskActionTypes.PUSH_TASK,
  payload: task,
});

export const setTaskStatus = (task: ITaskStatus): ISetStatusAction => ({
  type: TaskActionTypes.SET_STATUS,
  payload: task,
});

export const setDefault = (tasks: ITask[]): ISetStatusAction => {
  const defaultTask = tasks[0];

  if (defaultTask) {
    defaultTask.status = TaskButtonStatus.CURRENT;
  }

  return {
    type: TaskActionTypes.SET_STATUS,
    payload: defaultTask,
  }
};
