import {TaskButtonStatus} from '../../interfaces';

export interface IAnswerState {
  status: TaskButtonStatus;
}

export enum AnswerActionTypes {
  SET_STATUS = 'SET_ANSWER_STATUS',
  RESET_STATUS = 'RESET_STATUS',
}
