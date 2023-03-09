import { createContext } from 'react';

interface UIContextProps {
  isSidemenuOpen: boolean;

  // methods
  openSideMenu: () => any;
  closeSideMenu: () => any;
}

export const UIContext = createContext({} as UIContextProps);
