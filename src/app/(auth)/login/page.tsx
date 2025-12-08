import AuthForm from "./components/AuthForm/AuthForm";

import styles from './page.module.css'

const LoginPage = () => {
    return(
        <div className={styles.auth_page}>
            <AuthForm />
        </div>
    )
}

export default LoginPage;