import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Image, LoginForm } from '../components';
import img1 from '../../../assets/pages/page2.png';
import logo1 from '../../../assets/logo/logo1.png';

interface Props {}

export const AuthenticationPage: FC<Props> = (props) => (
  <Grid container style={{ placeItems: 'center' }}>
    <Grid item md={6} lg={6}>
      <Image imgUrl={img1} />
    </Grid>
    <Grid item sm={12} xs={12} md={6} lg={6}>
      <Box display={'flex'} justifyContent={'center'}>
        <LoginForm width={'45%'} />
      </Box>
    </Grid>
  </Grid>
);
