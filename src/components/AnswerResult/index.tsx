import React from 'react';
import {Alert} from 'react-bootstrap';
import {COLOR_MAP} from 'components/TaskButton';
import {ITaskButton, TaskButtonStatus} from '../../interfaces';
import './styles.scss';

type IAnswerResultProps = Pick<ITaskButton, 'status'> & {
  onClick: (isEqual: boolean) => void;
};

const AnswerResult: React.FC<IAnswerResultProps> = (props) => {
  if (![TaskButtonStatus.FAILED, TaskButtonStatus.PASSED].includes(props.status)) {
    return null;
  }

  return (
    <Alert variant={COLOR_MAP[props.status] as any} onClick={() => props.onClick(props.status === TaskButtonStatus.PASSED)} className={'s-answer-result'}>
      {props.status}
    </Alert>);
};

export default AnswerResult;
