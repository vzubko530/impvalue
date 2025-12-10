'use client';

import { UserDTO } from '@/dtos/User';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface UserContextProps {
  user: UserDTO | null;
  setUser: Dispatch<SetStateAction<UserDTO | null>>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch('/api/auth/session', {
          credentials: 'include',
        });
        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      }
    }

    loadUser();
  }, [setUser]);

  return (
    <UserContext value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext>
  );
};

export default UserProvider;
