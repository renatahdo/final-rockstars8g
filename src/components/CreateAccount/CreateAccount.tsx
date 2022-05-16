import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styles } from "./CreateAccountStyles";
import { useRouter } from "next/router";

export const CreateAccount: FC = () => {
    const router = useRouter()
    return (
        <Box sx={styles.background}>
            <Box sx={styles.container}>
                <Typography sx={styles.title}>Be part of the community!</Typography>
                <Typography sx={styles.text}>Find your favorite artists and songs and start listening to their music.</Typography>
                <Button sx={ styles.signUpButton } onClick={() => { router.push('/signup') }}>Create my account</Button>
            </Box>
        </Box>
    )
}