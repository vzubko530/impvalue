'use client';

import { Button, Stack, TextField, Typography } from '@mui/material';

import styles from './AuthForm.module.css';
import { useForm } from 'react-hook-form';
import { login } from '@/lib/api/auth';
import { LoginUserDTO } from '@/dtos/User';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginUserDTO>();

  const handleLogin = async (data: LoginUserDTO) => {
    const result = await login(data);

    if (result.success) {
      window.location.href = '/marketplace';
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={styles.auth_form}>
      <Typography
        className={styles.auth_form__title}
        sx={{ mb: '30px', textAlign: 'center' }}
        variant="h5"
        gutterBottom
      >
        Login
      </Typography>
      <div className={styles.auth_form__fields_group}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            {...register('email')}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            {...register('password')}
          />
        </Stack>
      </div>
      <Stack spacing={2}>
        <Button
          loading={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
        >
          Login
        </Button>
        <Button fullWidth>Sign Up</Button>
      </Stack>
    </form>
  );
};

export default AuthForm;
