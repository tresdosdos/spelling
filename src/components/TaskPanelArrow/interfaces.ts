export enum TaskPanelArrowType {
  LEFT = '<',
  RIGHT = '>'
}

export interface ITaskPanelArrow {
  orientation: TaskPanelArrowType;
  onClick: () => void;
}
