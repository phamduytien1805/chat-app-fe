import { Box, Button, Checkbox, Link, TextField, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FlexBox, FormContainer } from './styles';
import { Image } from './Image';
import logo2 from '../../../assets/logo/logo2.png';
import { useTranslation } from 'react-i18next';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, USER_MAX_LENGTH, USER_MIN_LENGTH } from '../utils/contants';

interface Props {
  onSubmit?: void;
  width?: string;
}

interface LoginFormInput {
  username: string;
  password: string;
}

const LoginForm = (props: Props) => {
  const { width } = props;
  const theme = useTheme();
  const { t } = useTranslation();
  useEffect(() => {}, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(t('required_information', { ns: 'error' })),
    password: Yup.string().required(t('required_information', { ns: 'error' })),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LoginFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer width={width} gap={3}>
      <FlexBox gap={1} flexDirection={'column'}>
        <img src={logo2} height={theme.spacing(7)} />
        <Typography component={'div'} variant='h4'>
          {t('welcome_to', { ns: 'auth' })}
        </Typography>
      </FlexBox>
      <FlexBox width={'100%'} gap={2} flexDirection={'column'}>
        <TextField
          label={t('user_name', { ns: 'auth' })}
          fullWidth
          error={!!errors['username']}
          helperText={errors['username'] ? errors['username'].message : ''}
          {...register('username')}
        />
        <FlexBox width={'100%'} flexDirection={'column'} gap={1}>
          <TextField
            label={t('password', { ns: 'auth' })}
            type='password'
            fullWidth
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
          />
          <Link href='#' variant='body2' underline='hover' marginRight={'auto'}>
            {t('forget_password', { ns: 'auth' })}
          </Link>
        </FlexBox>
      </FlexBox>
      <FlexBox width={'100%'} gap={1} flexDirection={'column'}>
        <Button variant='contained' fullWidth onClick={handleSubmit(onSubmit)}>
          {t('login', { ns: 'auth' })}
        </Button>
        <Typography component={'div'} variant='body2' marginRight={'auto'}>
          {t('need_an_account', { ns: 'auth' })}
          <Link href='#' variant='body2' underline='hover' marginLeft={theme.spacing(1)}>
            {t('register', { ns: 'auth' })}
          </Link>
        </Typography>
      </FlexBox>
    </FormContainer>
  );
};

export default LoginForm;
