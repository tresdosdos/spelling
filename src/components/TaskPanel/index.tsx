import React from 'react';
import {connect, ResolveThunks} from 'react-redux';
import {setDefault, setTaskStatus} from 'actions/task';
import {resetStatus} from 'actions/answer';
import TaskPanelArrow from 'components/TaskPanelArrow';
import TaskButton from 'components/TaskButton';
import {TaskPanelArrowType} from 'components/TaskPanelArrow/interfaces';
import {TaskPanelService} from 'services/task-panel';
import {ITask} from 'reducers/task/interfaces';
import {IRootState, ITaskButton, TaskButtonStatus} from '../../interfaces';
import './styles.scss';

function configureTaskButtons(buttons: ITaskButton[]): JSX.Element[] {
  return buttons.map((button) => {
     return (<TaskButton {...button} key={button.id}/>);
  });
}

const mapStateToProps = (state: IRootState) => ({
  buttons: state.task.tasks,
  currentTask: TaskPanelService.getCurrentTask(state.task.tasks),
});

const mapDispatchToProps = {
  setDefault,
  setTaskStatus,
  resetStatus,
};

class TaskPanel extends React.Component<ReturnType<typeof mapStateToProps> & ResolveThunks<typeof mapDispatchToProps>> {
  private goPrevTask = (): void => {
    const currentTask = this.props.currentTask;

    if (!currentTask) {
      return;
    }

    const prevTaskId = TaskPanelService.getPrev(this.props.buttons, currentTask);

    this.onTaskChange(currentTask, prevTaskId);
  }

  private goNextTask = (): void => {
    const currentTask = this.props.currentTask;

    if (!currentTask) {
      return;
    }

    const nextTaskId = TaskPanelService.getNext(this.props.buttons, currentTask);

    this.onTaskChange(currentTask, nextTaskId);
  }

  private onTaskChange = (currTask: ITask, task: ITaskButton | undefined): void => {
    if (!task) {
      return;
    }

    this.props.setTaskStatus({...currTask, status: TaskButtonStatus.PENDING});
    this.props.setTaskStatus({...task, status: TaskButtonStatus.CURRENT});
    this.props.resetStatus();
  }

  public render() {
    return (
      <nav className={'s-task-panel'}>
        <TaskPanelArrow
          orientation={TaskPanelArrowType.LEFT}
          onClick={this.goPrevTask}
        />
        <div className={'s-task-panel-buttons'}>
          {configureTaskButtons(this.props.buttons)}
        </div>
        <TaskPanelArrow
          orientation={TaskPanelArrowType.RIGHT}
          onClick={this.goNextTask}
        />
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPanel);
