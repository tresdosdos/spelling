import React from 'react';
import {connect, ResolveThunks} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {setDefault, setTasks, setTaskStatus} from 'actions/task';
import {startSpin, stopSpin} from 'actions/spinner';
import {resetStatus, setStatus} from 'actions/answer';
import TaskPanel from 'components/TaskPanel';
import Task from 'components/Task';
import AnswerResult from 'components/AnswerResult';
import {WordService} from 'services/word';
import {TaskPanelService} from 'services/task-panel';
import {DEFAULT_TASK} from 'reducers/task';
import {ITask} from 'reducers/task/interfaces';
import {IRootState, ITaskButton, ITaskStatus, TaskButtonStatus} from '../../interfaces';
import './styles.scss';

const mapStateToProps = (state: IRootState) => ({
  tasks: state.task.tasks,
  answerStatus: state.answer.status,
  currentTask: TaskPanelService.getCurrentTask(state.task.tasks),
});

const mapDispatchToProps = {
  setTasks,
  setDefault,
  startSpin,
  stopSpin,
  setStatus,
  setTaskStatus,
  resetStatus,
};

class LearningDashboard extends React.Component<ReturnType<typeof mapStateToProps> & ResolveThunks<typeof mapDispatchToProps>> {
  public async componentDidMount() {
    if (this.props.tasks.length) {
      return;
    }

    this.props.startSpin();

    const words = await WordService.getWordSet();
    const tasks: ITask[] = words.map((word: string, index: number) => {
      return {
        id: uuid(),
        num: index + 1,
        status: TaskButtonStatus.PENDING,
        word,
      }
    });

    this.props.setTasks(tasks);
    this.props.stopSpin();

    const currentTask = this.props.currentTask;

    if (Object.is(currentTask, DEFAULT_TASK)) {
      this.props.setDefault(this.props.tasks);
    }
  }

  private goNextTask = (status: TaskButtonStatus): void => {
    const currentTask = this.props.currentTask;

    if (!currentTask) {
      return;
    }

    const nextTask = TaskPanelService.getNext(this.props.tasks, currentTask);
    currentTask.status = status;

    if (!nextTask) {
      return;
    }

    nextTask.status = TaskButtonStatus.CURRENT;
    this.onTaskChange(currentTask, nextTask);
  }

  private onTaskChange = (currTask: ITaskStatus, taskId: ITaskButton): void => {
    this.props.setTaskStatus(currTask);
    this.props.setTaskStatus(taskId);
    this.props.resetStatus();
  }

  private onSubmit = (isEqual: boolean): void => {
    if (TaskPanelService.isCompleted(this.props.answerStatus)) {
      this.goNextTask(this.props.answerStatus);
      return;
    }

    if (isEqual) {
      this.props.setStatus(TaskButtonStatus.PASSED);
    } else {
      this.props.setStatus(TaskButtonStatus.FAILED);
    }
  }

  public render() {
    return (
      <main className={'s-learning-container'}>
        <TaskPanel/>
        <Task {...this.props.currentTask} onSubmit={this.onSubmit} status={this.props.answerStatus}/>
        <AnswerResult status={this.props.answerStatus} onClick={this.onSubmit}/>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningDashboard);
