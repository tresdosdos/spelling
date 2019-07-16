import {IAction} from '../../interfaces';
import {ITask, TaskActionTypes} from 'reducers/task/interfaces';
import {Action} from 'redux';

export type ISetTaskAction = IAction<TaskActionTypes.SET_TASKS, ITask[]>;
export type IPushTaskAction = IAction<TaskActionTypes.PUSH_TASK, ITask>;
export type ISetCurrentTaskAction = IAction<TaskActionTypes.SET_CURRENT, number>;
export type ISetPendingTaskAction = IAction<TaskActionTypes.SET_PENDING, number>;
export type ISetDefaultTaskAction = Action<TaskActionTypes.SET_DEFAULT>;
