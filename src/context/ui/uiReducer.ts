import { UIState } from './';

type UIAction =
  | { type: UIActionType.openSidebar }
  | { type: UIActionType.closeSidebar }
  | { type: UIActionType.setIsAddingEntry; payload: boolean }
  | { type: UIActionType.setIsDraggingEntry; payload: boolean };

export enum UIActionType {
  openSidebar = '[UI] - Open Sidebar',
  closeSidebar = '[UI] - Close Sidebar',
  setIsAddingEntry = '[UI] - Set is adding entry',
  setIsDraggingEntry = '[UI] - Set is dragging entry',
}

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.openSidebar:
      return { ...state, isSidemenuOpen: true };
    case UIActionType.closeSidebar:
      return { ...state, isSidemenuOpen: false };

    case UIActionType.setIsAddingEntry:
      return { ...state, isAddingEntry: action.payload };

    case UIActionType.setIsDraggingEntry:
      return { ...state, isDragging: action.payload };

    default:
      return state;
  }
};
