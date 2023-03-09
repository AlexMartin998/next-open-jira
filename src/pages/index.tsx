import { NextPage } from 'next';
import { Typography } from '@mui/material';

import { MainLayout } from '@/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Typography variant="h1" color="primary">
        Hello
      </Typography>
    </MainLayout>
  );
};

export default HomePage;
