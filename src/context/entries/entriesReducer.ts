import { EntriesState } from './';
import { Entry } from '@/interfaces';

type EntriesAction = { type: EntriesActionType; payload: Entry };

export enum EntriesActionType {
  addEntry = '[Entry] - Add Entry',
}

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case EntriesActionType.addEntry:
      return { ...state, entries: [...state.entries, action.payload] };

    default:
      return state;
  }
};
