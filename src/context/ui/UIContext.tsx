import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  toggleIsAddingEntry: () => void;
  setIsDragging: (isDragging: boolean) => void;
  toggleIsDragging: () => void;
}

export const UIContext = createContext({} as UIContextProps);
