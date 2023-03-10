import { EntriesState } from './';
   
type EntriesAction = { type: '[Entries] - ' };

export const entriesReducer = (state: EntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case '[Entries] - ':
      return { ...state };

    default:
      return state;
  }
}; 