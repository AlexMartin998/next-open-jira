import { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesActionType, EntriesContext, entriesReducer } from './';
import { Entry, EntryStatus } from '@/interfaces';
import { entriesAPi } from '@/api/axiosClient';

export interface EntriesState {
  entries: Entry[];
  activeEntry: Entry;
}

interface EntriesProviderProps {
  children: React.ReactNode;
}

const ENTRIES_INIT_STATE: EntriesState = {
  activeEntry: {} as Entry,

  entries: [],
};

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INIT_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: EntryStatus.pending,
    };

    dispatch({ type: EntriesActionType.addEntry, payload: newEntry });
  };

  const setActiveEntry = (entry: Entry) => {
    dispatch({ type: EntriesActionType.setActiveEntry, payload: entry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: EntriesActionType.updateEntry, payload: entry });
  };

  const getAllEntries = async () => {
    const { data } = await entriesAPi.get<Entry[]>('/entries');
    dispatch({ type: EntriesActionType.getEntries, payload: data });
  };
  useEffect(() => {
    getAllEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // methods
        addNewEntry,
        setActiveEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
