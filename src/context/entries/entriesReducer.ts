import { EntriesState } from './';
import { Entry } from '@/interfaces';

type EntriesAction =
  | { type: EntriesActionType.addEntry; payload: Entry }
  | { type: EntriesActionType.updateEntryStatus; payload: string }
  | { type: EntriesActionType.updateEntry; payload: Entry }
  | { type: EntriesActionType.setActiveEntry; payload: Entry };

export enum EntriesActionType {
  addEntry = '[Entry] - Add Entry',
  updateEntryStatus = '[Entry] - Update Entry Status',
  updateEntry = '[Entry] - Update Entry',
  setActiveEntry = '[Entry] - Set Active Entry',
}

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case EntriesActionType.addEntry:
      return { ...state, entries: [...state.entries, action.payload] };

    case EntriesActionType.setActiveEntry:
      return { ...state, activeEntry: action.payload };

    case EntriesActionType.updateEntry:
      return {
        ...state,

        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;

            return entry;
          }

          return entry;
        }),
      };

    default:
      return state;
  }
};
