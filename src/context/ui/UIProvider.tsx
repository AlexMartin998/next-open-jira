import { useReducer } from 'react';

import { UIActionType, UIContext, uiReducer } from './';

export interface UIState {
  isSidemenuOpen: boolean;
  isAddTaskFormOpen: boolean;
}

interface UIProviderProps {
  children: React.ReactNode;
}

const UI_INIT_STATE: UIState = {
  isSidemenuOpen: false,
  isAddTaskFormOpen: false,
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const openSideMenu = () => dispatch({ type: UIActionType.openSidebar });
  const closeSideMenu = () => dispatch({ type: UIActionType.closeSidebar });

  const openAddTaskForm = () =>
    dispatch({ type: UIActionType.openAddTaskForm });
  const closeAddTaskForm = () =>
    dispatch({ type: UIActionType.closeAddTaskForm });
  const toggleAddTaskForm = () => {
    state.isAddTaskFormOpen ? closeAddTaskForm() : openAddTaskForm();
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        closeSideMenu,
        openSideMenu,
        openAddTaskForm,
        closeAddTaskForm,
        toggleAddTaskForm,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
