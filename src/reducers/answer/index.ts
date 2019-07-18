import {ActionType} from 'typesafe-actions';
import * as actions from 'actions/answer';
import {TaskButtonStatus} from '../../interfaces';
import {AnswerActionTypes, IAnswerState} from './interfaces';

const initialState: IAnswerState = {
  status: TaskButtonStatus.PENDING,
};
type IAnswerActions = ActionType<typeof actions>;

export default function AnswerReducer(state = initialState, action: IAnswerActions): IAnswerState {
  switch (action.type) {
    case AnswerActionTypes.SET_STATUS: {
      return {...state, status: action.payload};
    }
    case AnswerActionTypes.RESET_STATUS: {
      return {...state, status: TaskButtonStatus.PENDING};
    }
    default: {
      return state;
    }
  }
}
