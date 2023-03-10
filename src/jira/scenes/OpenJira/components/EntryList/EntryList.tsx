import { DragEvent, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntryCard } from './../';
import { useEntries, useUi } from '@/context/hooks';
import { EntryStatus } from '@/interfaces';
import styles from './EntryList.module.css';

export interface EntryListProps {
  status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { entries } = useEntries();
  const { isDragging } = useUi();

  // memorized to change only when entries change, not when it is rerendered
  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDropEntry = (e: DragEvent) => {
    const id = e.dataTransfer.getData('text'); // text - draggable setData
  };

  return (
    // drop

    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 210px)',
          // overflow: 'scroll',
          backgroundColor: 'transparent',
          p: '6px 15px',
        }}
      >
        {/* drag */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
