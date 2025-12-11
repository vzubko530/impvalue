import { Container } from '@mui/material';
import Navigation from '../Navigatoin/Navigation';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>Logo</div>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
