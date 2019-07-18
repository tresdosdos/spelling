import {ISetStatusAction} from 'actions/task/interfaces';
import {IResetStatusAction} from 'actions/answer/interfaces';

export interface IOnTaskChangeActions {
  setPending: ISetStatusAction;
  setCurrent: ISetStatusAction;
  resetStatus: IResetStatusAction;
}
