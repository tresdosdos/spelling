import * as actions from 'actions/task';
import {ActionType} from 'typesafe-actions';
import {ITask, ITaskState, TaskActionTypes} from 'reducers/task/interfaces';
import {TaskButtonStatus} from '../../interfaces';

type ITaskActions = ActionType<typeof actions>;
const initialState: ITaskState = {
  tasks: [],
};
export const DEFAULT_TASK: ITask = {
  id: '',
  num: 0,
  word: '',
  status: TaskButtonStatus.PENDING,
};

export default function TaskReducer(state = initialState, action: ITaskActions): ITaskState {
  switch (action.type) {
    case TaskActionTypes.SET_TASKS: {
      return {...state, tasks: action.payload};
    }
    case TaskActionTypes.PUSH_TASK: {
      state.tasks.push(action.payload);
      return {...state, tasks: [...state.tasks]};
    }
    case TaskActionTypes.SET_STATUS: {
      const task = state.tasks.find(task => task.id === action.payload.id);

      if (task) {
        task.status = action.payload.status;
      }

      return {...state, tasks: [...state.tasks]};
    }
    default: {
      return state;
    }
  }
}
