import { useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  isSidemenuOpen: boolean;
}

interface UIProviderProps {
  children: React.ReactNode;
}

const UI_INIT_STATE: UIState = {
  isSidemenuOpen: false,
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
