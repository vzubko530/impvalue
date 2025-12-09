import { CreateUserDTO } from '@/dtos/User';

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
