import Link from 'next/link';
import styles from './Navigation.module.css';
import { getUserFromCookie } from '@/lib/getUserFromCookies';
import LogoutButton from '../LogoutButton/LogoutButton';

const Navigation = async () => {
  // const user = await getUserFromCookie();

  return (
    <nav className={styles.navigation}>
      <Link className={styles.navigation__link} href="/marketplace">
        Marketplace
      </Link>
      {/* {!user && (
        <>
          <Link className={styles.navigation__link} href="/login">
            Login
          </Link>
          <Link className={styles.navigation__link} href="/signup">
            SignUp
          </Link>
        </>
      )}
      {user && <LogoutButton />} */}
    </nav>
  );
};

export default Navigation;
