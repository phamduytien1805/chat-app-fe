import { ReactNode } from 'react';
import { Grid, Typography } from '@mui/material';
type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <Grid container>
      <Grid item md={6} />
      <Grid item md={6} />
    </Grid>
  );
};

export default Layout;
