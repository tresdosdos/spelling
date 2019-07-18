import {ITaskButton, TaskButtonStatus} from '../../interfaces';
import {ITask} from 'reducers/task/interfaces';
import {DEFAULT_TASK} from 'reducers/task';

export class TaskPanelService {
  public static getPrev(buttons: ITaskButton[], currentButton: ITaskButton): ITaskButton | undefined {
    const prevButton = Array.from(buttons).reverse().find((button) => {
      return button.num < currentButton.num && button.status === TaskButtonStatus.PENDING;
    });

    if (prevButton) {
      return prevButton;
    }

    const lastButton = Array.from(buttons).reverse().find(button => button.status === TaskButtonStatus.PENDING);

    if (lastButton) {
      return lastButton;
    }
  }

  public static getNext(buttons: ITaskButton[], currentButton: ITaskButton): ITaskButton | undefined {
    const nextButton = buttons.find((button) => {
      return button.num > currentButton.num && button.status === TaskButtonStatus.PENDING;
    });

    if (nextButton) {
      return nextButton;
    }

    const firstButton = buttons.find(button => button.status === TaskButtonStatus.PENDING);

    if (firstButton) {
      return firstButton;
    }
  }

  public static getCurrentTask(tasks: ITask[]): ITask {
    return tasks.find(button => button.status === TaskButtonStatus.CURRENT) || DEFAULT_TASK;
  }

  public static isCompleted(status: TaskButtonStatus): boolean {
    return [TaskButtonStatus.PASSED, TaskButtonStatus.FAILED].includes(status);
  }
}
