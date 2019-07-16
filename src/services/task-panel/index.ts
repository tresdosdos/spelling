import {ITaskButton, TaskButtonStatus} from '../../interfaces';

export class TaskPanelService {
  public static getPrev(buttons: ITaskButton[], currentButton: ITaskButton): number | undefined {
    const prevButton = Array.from(buttons).reverse().find((button) => {
      return button.num < currentButton.num && button.status === TaskButtonStatus.PENDING;
    });

    if (prevButton) {
      return prevButton.id;
    }

    const lastButton = Array.from(buttons).reverse().find(button => button.status === TaskButtonStatus.PENDING);

    if (lastButton) {
      return lastButton.id;
    }
  }

  public static getNext(buttons: ITaskButton[], currentButton: ITaskButton): number | undefined {
    const nextButton = buttons.find((button) => {
      return button.num > currentButton.num && button.status === TaskButtonStatus.PENDING;
    });

    if (nextButton) {
      return nextButton.id;
    }

    const firstButton = buttons.find(button => button.status === TaskButtonStatus.PENDING);

    if (firstButton) {
      return firstButton.id;
    }
  }
}
