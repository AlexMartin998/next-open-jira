import { useState, useMemo } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  capitalize,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { MainLayout } from '@/layouts';
import { EntryStatus } from '@/interfaces';

const validStatus: EntryStatus[] = [
  EntryStatus.pending,
  EntryStatus.inProgress,
  EntryStatus.completed,
];

interface EPState {
  inputValue: string;
  imputTouched: boolean;
  status: EntryStatus;
}

const EntryPage = () => {
  const [inputValue, setinputValue] = useState<EPState['inputValue']>('');
  const [status, setStatus] = useState<EPState['status']>(EntryStatus.pending);
  const [touched, setTouched] = useState<EPState['imputTouched']>(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue.length, touched]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const onSave = () => {
    if (!inputValue.trim()) return;
    console.log('SAVE');
  };

  return (
    <MainLayout title="....">
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            p: '4px 8px 12px 8px',
            backgroundColor: '#1e2124',
            borderRadius: '4px',
          }}
        >
          <CardHeader title="Entry: " subheader="Created at" />

          <CardContent>
            <TextField
              sx={{ mt: 2, mb: 1 }}
              fullWidth
              placeholder="New entry"
              autoFocus
              multiline
              label="New entry"
              //
              value={inputValue}
              onChange={onInputChange}
              // err
              error={isNotValid}
              onBlur={() => setTouched(true)}
              helperText={isNotValid && 'Description is required'}
            />

            <FormControl>
              <FormLabel>Status:</FormLabel>
              <RadioGroup row value={status} onChange={onStatusChange}>
                {validStatus.map(opt => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={<Radio />}
                    label={capitalize(opt)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>

          <CardActions>
            <Button
              startIcon={<SaveOutlinedIcon />}
              variant="contained"
              fullWidth
              onClick={onSave}
              disabled={!inputValue.length}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark', // without useTheme()
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </MainLayout>
  );
};

export default EntryPage;
