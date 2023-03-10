import { UIState } from './';

type UIAction =
  | { type: UIActionType.openSidebar }
  | { type: UIActionType.closeSidebar }
  | { type: UIActionType.openAddTaskForm }
  | { type: UIActionType.closeAddTaskForm };

export enum UIActionType {
  openSidebar = '[UI] - Open Sidebar',
  closeSidebar = '[UI] - Close Sidebar',
  openAddTaskForm = '[UI] - Open add task form',
  closeAddTaskForm = '[UI] - Close add task form',
}

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.openSidebar:
      return { ...state, isSidemenuOpen: true };
    case UIActionType.closeSidebar:
      return { ...state, isSidemenuOpen: false };

    case UIActionType.openAddTaskForm:
      return { ...state, isAddTaskFormOpen: true };
    case UIActionType.closeAddTaskForm:
      return { ...state, isAddTaskFormOpen: false };

    default:
      return state;
  }
};
