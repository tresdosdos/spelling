import * as actions from 'actions/task';
import {ITaskState, TaskActionTypes} from 'reducers/task/interfaces';
import {ActionType} from 'typesafe-actions';
import {TaskButtonStatus} from '../../interfaces';

type ITaskActions = ActionType<typeof actions>;
const initialState: ITaskState = {
  tasks: [
    {
      id: 10,
      num: 1,
      status: TaskButtonStatus.FAILED,
      word: 'chlen1',
    },
    {
      id: 12,
      num: 2,
      status: TaskButtonStatus.CURRENT,
      word: 'chlen2',
    },
    {
      id: 101,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 15,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 1111,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 112,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 113,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 114,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 115,
      num: 3,
      status: TaskButtonStatus.FAILED,
      word: 'chlen3',
    },
    {
      id: 16,
      num: 4,
      status: TaskButtonStatus.PENDING,
      word: 'chlen4',
    },
  ],
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
    case TaskActionTypes.SET_CURRENT: {
      const currentTask = state.tasks.find(task => task.id === action.payload);

      if (currentTask) {
        currentTask.status = TaskButtonStatus.CURRENT;
      }

      return {...state, tasks: [...state.tasks]};
    }
    case TaskActionTypes.SET_PENDING: {
      const currentTask = state.tasks.find(task => task.id === action.payload);

      if (currentTask) {
        currentTask.status = TaskButtonStatus.PENDING;
      }

      return {...state, tasks: [...state.tasks]};
    }
    case TaskActionTypes.SET_DEFAULT: {
      const firstTask = state.tasks[0];

      if (firstTask) {
        firstTask.status = TaskButtonStatus.CURRENT;
      }

      return {...state, tasks: [...state.tasks]};
    }
    default: {
      return state;
    }
  }
}
