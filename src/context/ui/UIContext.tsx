import { createContext } from 'react';

interface UIContextProps {
  sidemenuOpen: boolean;
}

export const UIContext = createContext({} as UIContextProps);
