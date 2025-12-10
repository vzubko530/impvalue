'use client';

import { useState } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, SugnupSchemaType } from '@/lib/validation/auth';

import { Button, Stack, TextField, Typography } from '@mui/material';

import styles from './SignupForm.module.css';
import { createAccount } from '@/lib/api/auth';
import { CreateUserDTO } from '@/dtos/User';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [serverError, setServerError] = useState('');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SugnupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  const handleSignup = async (data: CreateUserDTO) => {
    const result = await createAccount(data);

    if (result.success) {
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)} className={styles.signup_form}>
      <Typography
        className={styles.signup_form__title}
        sx={{ mb: '30px', textAlign: 'center' }}
        variant="h5"
        gutterBottom
      >
        Sign Up
      </Typography>
      <div className={styles.signup_form__fields_group}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            size="small"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            fullWidth
            label="Repeat password"
            variant="outlined"
            type="password"
            size="small"
            {...register('repeatPassword')}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
          />
        </Stack>
      </div>
      <Stack spacing={2}>
        <Button
          loading={isSubmitting}
          fullWidth
          variant="contained"
          type="submit"
        >
          SignUp
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
