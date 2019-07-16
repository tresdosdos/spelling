import {IStartSpinnerAction, IStopSpinnerAction} from './interfaces';
import {SpinnerActionTypes} from 'reducers/spinner/interfaces';

export const startSpin = (): IStartSpinnerAction => ({
  type: SpinnerActionTypes.START,
});

export const stopSpin = (): IStopSpinnerAction => ({
  type: SpinnerActionTypes.STOP,
});
