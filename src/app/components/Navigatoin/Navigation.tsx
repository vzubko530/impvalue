'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../UserProvider/UserProvider';
import { logout } from '@/lib/api/auth';
import { Button, Menu, MenuItem } from '@mui/material';

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={styles.navigation}>
      <Link className={styles.navigation__link} href="/marketplace">
        Marketplace
      </Link>
      {!user && (
        <>
          <Link className={styles.navigation__link} href="/login">
            Login
          </Link>
          <Link className={styles.navigation__link} href="/signup">
            SignUp
          </Link>
        </>
      )}

      {user && (
        <div className={styles.navigation__link}>
          <div
            onClick={(e) => {
              handleMenuOpen(e);
            }}
          >
            {user?.username}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>
              <Link href={'/profile'}>Profile</Link>
            </MenuItem>
            <MenuItem>
              <Link href={'/settings'}>Settings</Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
