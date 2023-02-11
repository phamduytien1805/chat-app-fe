import { Box, Collapse, Grid } from '@mui/material';
import { ComponentType, FC } from 'react';
import { Image, LoginForm, RegisterForm } from '../components';
import img1 from '../../../assets/pages/page2.png';
import logo1 from '../../../assets/logo/logo1.png';
import { Redirect, Route, useLocation } from 'react-router-dom';

interface Props {}

const FormAuth: FC<Props> = (props) => {
  const isRegisterForm = location.pathname === '/register';

  return (
    <>
      {isRegisterForm ? (
        <Box display={'flex'} justifyContent={'center'}>
          <RegisterForm width={'70%'} />
        </Box>
      ) : (
        <Box display={'flex'} justifyContent={'center'}>
          <LoginForm width={'70%'} />
        </Box>
      )}
    </>
  );
};

export const AuthenticationPage: FC<Props> = (props) => (
  <Grid container style={{ placeItems: 'center' }}>
    <Grid item md={6} lg={6}>
      <Image imgUrl={img1} />
    </Grid>
    <Grid item sm={12} xs={12} md={6} lg={6}>
      <FormAuth />
    </Grid>
  </Grid>
);
