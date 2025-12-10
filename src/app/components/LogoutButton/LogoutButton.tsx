'use client';

import { logout } from '@/lib/api/auth';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
