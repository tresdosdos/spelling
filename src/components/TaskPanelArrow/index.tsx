import React from 'react';
import {Badge} from 'react-bootstrap';
import {ITaskPanelArrow} from './interfaces';
import './styles.scss';

const TaskPanelArrow: React.FC<ITaskPanelArrow> = (props) => {
  return (
    <Badge variant={'warning'} className={'s-task-panel-arrow'} onClick={props.onClick}>{props.orientation}</Badge>
  );
};

export default TaskPanelArrow;
