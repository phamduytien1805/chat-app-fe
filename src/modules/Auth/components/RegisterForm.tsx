import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FlexBox, FormContainer } from './styles';
import { Image } from './Image';
import logo2 from '../../../assets/logo/logo2.png';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

interface Props {
  width?: string;
}

const RegisterForm: FC<Props> = ({ width }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <FormContainer width={width} gap={3}>
      <FlexBox gap={1} width={'100%'} flexDirection={'column'} alignItems={'flex-start'}>
        <img src={logo2} height={theme.spacing(7)} />
        <Typography component={'div'} variant='h4'>
          {t('create_an_account', { ns: 'auth' })}
        </Typography>
      </FlexBox>
      <FlexBox width={'100%'} gap={2} flexDirection={'column'}>
        <TextField label={t('user_name', { ns: 'auth' })} fullWidth />
        <TextField label={t('email', { ns: 'auth' })} type='email' fullWidth />
        <FlexBox width={'100%'} gap={2} flexDirection={'column'}>
          <FlexBox gap={2}>
            <TextField label={t('password', { ns: 'auth' })} type={showPassword ? 'text' : 'password'} fullWidth />
            <TextField
              label={t('confirm_password', { ns: 'auth' })}
              type={showPassword ? 'text' : 'password'}
              fullWidth
            />
          </FlexBox>
          <FormControlLabel
            control={<Checkbox value={showPassword} />}
            label={t('show_password', { ns: 'auth' })}
            onChange={handleShowPassword}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox width={'100%'} gap={1} flexDirection={'column'}>
        <Button variant='contained' fullWidth>
          {t('sign_up', { ns: 'auth' })}
        </Button>
        <Link onClick={() => history.push('login')} variant='body2' underline='hover' marginLeft={theme.spacing(1)}>
          {t('already_have_an_account', { ns: 'auth' })}
        </Link>
      </FlexBox>
    </FormContainer>
  );
};

export default RegisterForm;
