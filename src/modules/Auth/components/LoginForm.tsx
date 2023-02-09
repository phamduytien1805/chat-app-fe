import { Box, Button, Checkbox, Link, TextField, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FlexBox, FormContainer } from './styles';
import { Image } from './Image';
import logo2 from '../../../assets/logo/logo2.png';
import { useTranslation } from 'react-i18next';

interface Props {
  onSubmit?: void;
  width?: string;
}

const LoginForm = (props: Props) => {
  const { width } = props;
  const theme = useTheme();
  const { t } = useTranslation(['auth']);
  useEffect(() => {}, []);
  return (
    <FormContainer width={width} gap={3}>
      <FlexBox gap={1} flexDirection={'column'}>
        <img src={logo2} height={theme.spacing(7)} />
        <Typography component={'div'} variant='h4'>
          {t('welcome_to', { ns: 'auth' })}
        </Typography>
      </FlexBox>
      <FlexBox width={'100%'} gap={2} flexDirection={'column'}>
        <TextField label={t('user_name', { ns: 'auth' })} fullWidth />
        <TextField label={t('password', { ns: 'auth' })} fullWidth />
      </FlexBox>
      {/* <Checkbox labe /> */}
      <FlexBox width={'100%'}>
        <Typography component={'div'} variant='body2'>
          {t('remember_me', { ns: 'auth' })}
        </Typography>
        <Link href='#' underline='hover' marginLeft={'auto'}>
          {t('forget_password', { ns: 'auth' })}
        </Link>
      </FlexBox>
      <FlexBox width={'100%'}>
        <Button variant='contained' fullWidth>
          {t('login', { ns: 'auth' })}
        </Button>
      </FlexBox>
    </FormContainer>
  );
};

export default LoginForm;
