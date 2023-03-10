import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;
  isAddTaskFormOpen: boolean;

  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  openAddTaskForm: () => void;
  closeAddTaskForm: () => void;
  toggleAddTaskForm: () => void;
}

export const UIContext = createContext({} as UIContextProps);
