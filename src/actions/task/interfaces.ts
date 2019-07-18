import {IAction, ITaskStatus} from '../../interfaces';
import {ITask, TaskActionTypes} from 'reducers/task/interfaces';

export type ISetTaskAction = IAction<TaskActionTypes.SET_TASKS, ITask[]>;
export type IPushTaskAction = IAction<TaskActionTypes.PUSH_TASK, ITask>;
export type ISetStatusAction = IAction<TaskActionTypes.SET_STATUS, ITaskStatus>;
