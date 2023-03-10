import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry, EntryStatus } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps {
  children: React.ReactNode;
}

const ENTRIES_INIT_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
      status: EntryStatus.pending,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
      status: EntryStatus.inProgress,
      createdAt: Date.now() - 1_000_000,
    },
    {
      _id: uuidv4(),
      description:
        'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.',
      status: EntryStatus.completed,
      createdAt: Date.now() - 100_000,
    },
  ],
};

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INIT_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
