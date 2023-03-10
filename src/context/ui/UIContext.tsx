import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;
  isAddingEntry: boolean;

  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  toggleIsAddingEntry: () => void;
}

export const UIContext = createContext({} as UIContextProps);
