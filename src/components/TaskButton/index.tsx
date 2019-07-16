import React from 'react';
import {Badge} from 'react-bootstrap';
import {ITaskButton, TaskButtonStatus} from '../../interfaces';

const colorMap = {
  [TaskButtonStatus.FAILED]: 'danger',
  [TaskButtonStatus.PASSED]: 'success',
  [TaskButtonStatus.PENDING]: 'light',
  [TaskButtonStatus.CURRENT]: 'primary'
};

const TaskButton: React.FC<ITaskButton> = React.memo((props) => {
  return (
    <Badge variant={colorMap[props.status] as any}>{props.num}</Badge>
  );
});

export default TaskButton;
