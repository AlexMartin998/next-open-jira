import { useEffect, useReducer } from 'react';

import { entriesAPi } from '@/api/axiosClient';
import { Entry } from '@/interfaces';
import { EntriesActionType, EntriesContext, entriesReducer } from './';

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

  const addNewEntry = async (description: string) => {
    const { data: newEntry } = await entriesAPi.post<Entry>('/entries', {
      description,
    });

    dispatch({ type: EntriesActionType.addEntry, payload: newEntry });
  };

  const setActiveEntry = (entry: Entry) => {
    dispatch({ type: EntriesActionType.setActiveEntry, payload: entry });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesAPi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: EntriesActionType.updateEntry, payload: data });
    } catch (error) {
      console.log(error);
    }
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
