import { Container } from '@mui/material';
import Navigation from '../Navigatoin/Navigation';
import styles from './Header.module.css'

const Header = () => {
    return(
        <Container>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    Logo
                </div>
                <div className={styles.header__navigation}>
                    <Navigation />
                </div>
            </header>
        </Container>
    )
}

export default Header;