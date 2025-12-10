import { CreateUserDTO, LoginUserDTO } from '@/dtos/User';

export async function createAccount(userData: CreateUserDTO) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
    {
      method: 'POST',
      body: JSON.stringify(userData),
    },
  );

  if (!resp.ok) {
    throw new Error('Failed to create account');
  }

  return {
    success: true,
  };
}

export async function login(userData: LoginUserDTO) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'include',
    },
  );

  if (!resp.ok) {
    throw new Error('Failed to login');
  }

  return {
    success: true,
  };
}

export async function logout() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`,
    {
      method: 'POST',
      credentials: 'include',
    },
  );

  if (!resp.ok) {
    throw new Error('Failed to logout');
  }

  return {
    success: true,
  };
}
