import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;
  isAddingEntry: boolean;

  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  toggleIsAddingEntry: () => void;
  setIsDraggingEntry: (isDragging: boolean) => void;
  toggleIsDraggingEntry: () => void;
}

export const UIContext = createContext({} as UIContextProps);
