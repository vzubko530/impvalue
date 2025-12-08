import { Button, Stack, TextField, Typography } from "@mui/material";

import styles from './SignupForm.module.css';

const SignupForm = () => {
    return(
        <form className={styles.signup_form}>
            <Typography className={styles.signup_form__title} sx={{ mb: '30px', textAlign: 'center' }} variant="h5" gutterBottom>
                Sign Up
            </Typography>
            <div className={styles.signup_form__fields_group}>
                <Stack spacing={2}>
                    <TextField fullWidth label="Email" variant="outlined" size="small" />
                    <TextField fullWidth label="Username" variant="outlined" size="small" />
                    <TextField fullWidth label="Password" variant="outlined" type="password" size="small" />
                    <TextField fullWidth label="Repeat password" variant="outlined" type="password" size="small" />
                </Stack>
            </div>
            <Stack spacing={2}>
                <Button fullWidth variant="contained">SignUp</Button>
            </Stack>
        </form>
    )
}

export default SignupForm;