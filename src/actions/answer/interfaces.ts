import {Action} from 'redux';
import {AnswerActionTypes} from 'reducers/answer/interfaces';
import {IAction, TaskButtonStatus} from '../../interfaces';

export type ISetStatusAction = IAction<AnswerActionTypes.SET_STATUS, TaskButtonStatus>;
export type IResetStatusAction = Action<AnswerActionTypes.RESET_STATUS>;
