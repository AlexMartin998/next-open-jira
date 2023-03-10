import { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { MainLayout } from '@/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending" />

            <CardContent>
              {/* add new task */}

              {/* list */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completed" />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default HomePage;
