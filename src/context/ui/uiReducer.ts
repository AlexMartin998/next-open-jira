import { UIState } from './';

type UIAction = { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return { ...state, sidemenuOpen: true };

    case 'UI - Close Sidebar':
      return { ...state, sidemenuOpen: false };

    default:
      return state;
  }
};
