import { useReducer } from 'react';

import { UIActionType, UIContext, uiReducer } from './';

export interface UIState {
  isSidemenuOpen: boolean;
  isAddingEntry: boolean;
}

interface UIProviderProps {
  children: React.ReactNode;
}

const UI_INIT_STATE: UIState = {
  isSidemenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const openSideMenu = () => dispatch({ type: UIActionType.openSidebar });
  const closeSideMenu = () => dispatch({ type: UIActionType.closeSidebar });

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: UIActionType.setIsAddingEntry, payload: isAdding });
  };
  const toggleIsAddingEntry = () => {
    dispatch({
      type: UIActionType.setIsAddingEntry,
      payload: !state.isAddingEntry,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        closeSideMenu,
        openSideMenu,

        setIsAddingEntry,
        toggleIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
