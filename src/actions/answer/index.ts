import {TaskButtonStatus} from '../../interfaces';
import {IResetStatusAction, ISetStatusAction} from './interfaces';
import {AnswerActionTypes} from 'reducers/answer/interfaces';

export const setStatus = (status: TaskButtonStatus): ISetStatusAction => ({
  type: AnswerActionTypes.SET_STATUS,
  payload: status,
});

export const resetStatus = (): IResetStatusAction => ({
  type: AnswerActionTypes.RESET_STATUS,
});
