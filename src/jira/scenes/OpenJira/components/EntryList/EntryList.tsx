import { List, Paper } from '@mui/material';

import { EntryCard } from './../';
import { useEntries } from '@/shared/hooks';
import { EntryStatus } from '@/interfaces';
import { useMemo } from 'react';

export interface EntryListProps {
  status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { entries } = useEntries();

  // memorized to change only when entries change, not when it is rerendered
  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  return (
    // drop

    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 210px)',
          // overflow: 'scroll',
          backgroundColor: 'transparent',
          p: '6px 15px',
        }}
      >
        {/* drag */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
