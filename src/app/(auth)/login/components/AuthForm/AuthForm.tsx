import { Button, Stack, TextField, Typography } from "@mui/material";

import styles from './AuthForm.module.css';

const AuthForm = () => {

    return(
        <form className={styles.auth_form}>
            <Typography className={styles.auth_form__title} sx={{ mb: '30px', textAlign: 'center' }} variant="h5" gutterBottom>
                Login
            </Typography>
            <div className={styles.auth_form__fields_group}>
                <Stack spacing={2}>
                    <TextField fullWidth label="Login" variant="outlined" size="small" />
                    <TextField fullWidth label="Password" variant="outlined" type="password" size="small" />
                </Stack>
            </div>
            <Stack spacing={2}>
                <Button fullWidth variant="contained">Login</Button>
                <Button fullWidth>Sign Up</Button>
            </Stack>
        </form>
    )
}

export default AuthForm;