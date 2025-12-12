'use client';

import { UserContext } from '@/app/components/UserProvider/UserProvider';
import { Button } from '@mui/material';
import { useContext } from 'react';

interface EditButtonProps {
  sellerId: string;
}

const EditButton = ({ sellerId }: EditButtonProps) => {
  const { user } = useContext(UserContext);

  if (user?._id !== sellerId) return null;

  return (
    <Button fullWidth variant="outlined">
      Edit
    </Button>
  );
};

export default EditButton;
