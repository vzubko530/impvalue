import Link from 'next/link';
import styles from './Navigation.module.css'

const Navigation = () => {

    return(
        <nav className={styles.navigation}>
            <Link className={styles.navigation__link} href='/marketplace'>Marketplace</Link>
            <Link className={styles.navigation__link} href='/login'>Login</Link>
            <Link className={styles.navigation__link} href='/signup'>SignUp</Link>
        </nav>
    )
}

export default Navigation;