import SignupForm from "./components/SignupForm";

import styles from './page.module.css'

const SignupPage = () => {
    return(
        <div className={styles.signup_page}>
            <SignupForm />
        </div>
    )
}

export default SignupPage;