import { useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

interface UIProviderProps {
  children: React.ReactNode;
}

const UI_INIT_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  return (
    <UIContext.Provider value={{ sidemenuOpen: false }}>
      {children}
    </UIContext.Provider>
  );
};
