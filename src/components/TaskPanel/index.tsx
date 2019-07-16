import React from 'react';
import {connect, ResolveThunks} from 'react-redux';
import {setCurrent, setDefault, setPending} from 'actions/task';
import TaskPanelArrow from 'components/TaskPanelArrow';
import TaskButton from 'components/TaskButton';
import {TaskPanelArrowType} from 'components/TaskPanelArrow/interfaces';
import {TaskPanelService} from 'services/task-panel';
import {IRootState, ITaskButton, TaskButtonStatus} from '../../interfaces';
import './styles.scss';
import {ITask} from 'reducers/task/interfaces';

function configureTaskButtons(buttons: ITaskButton[]): JSX.Element[] {
  return buttons.map((button) => {
     return (<TaskButton {...button} key={button.id}/>);
  });
}

const mapStateToProps = (state: IRootState) => ({
  buttons: state.task.tasks,
});

const mapDispatchToProps = {
  setCurrent,
  setPending,
  setDefault,
};

class TaskPanel extends React.Component<ReturnType<typeof mapStateToProps> & ResolveThunks<typeof mapDispatchToProps>> {
  public componentDidMount(): void {
    const currentTask = this.currentTask;

    if (!currentTask) {
      this.props.setDefault();
    }
  }

  private goPrevTask = (): void => {
    const currentTask = this.currentTask;

    if (!currentTask) {
      return;
    }

    const prevTaskId = TaskPanelService.getPrev(this.props.buttons, currentTask);

    if (!prevTaskId) {
      return;
    }

    this.props.setPending(currentTask.id);
    this.props.setCurrent(prevTaskId);
  }

  private goNextTask = (): void => {
    const currentTask = this.currentTask;

    if (!currentTask) {
      return;
    }

    const nextTaskId = TaskPanelService.getNext(this.props.buttons, currentTask);

    if (!nextTaskId) {
      return;
    }

    this.props.setPending(currentTask.id);
    this.props.setCurrent(nextTaskId);
  }

  private get currentTask(): ITask | undefined {
    return this.props.buttons.find(button => button.status === TaskButtonStatus.CURRENT);
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
