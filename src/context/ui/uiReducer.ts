import { UIState } from './';

type UIAction = { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return { ...state, isSidemenuOpen: true };

    case 'UI - Close Sidebar':
      return { ...state, isSidemenuOpen: false };

    default:
      return state;
  }
};
