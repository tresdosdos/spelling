import React from 'react';
import {Badge} from 'react-bootstrap';
import {ITaskButton, TaskButtonStatus} from '../../interfaces';

export const COLOR_MAP = {
  [TaskButtonStatus.FAILED]: 'danger',
  [TaskButtonStatus.PASSED]: 'success',
  [TaskButtonStatus.PENDING]: 'light',
  [TaskButtonStatus.CURRENT]: 'primary'
};

const TaskButton: React.FC<ITaskButton> = React.memo((props) => {
  return (
    <Badge variant={COLOR_MAP[props.status] as any}>{props.num}</Badge>
  );
});

export default TaskButton;
