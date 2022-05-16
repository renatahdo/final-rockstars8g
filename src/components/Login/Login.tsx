/* eslint-disable react/no-unescaped-entities */
import { FC, useState } from "react";
import { Stack, Button, Box, TextField, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { styles } from "./LoginStyles";
import LoginProps from "./LoginTypes";
import { useRouter } from "next/router";
import { Navbar } from "../Navbar/Navbar";
import { sha512 } from "js-sha512";

export const Login: FC<LoginProps> = ({ mode }) => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState<any>();
    const [user, setUser] = useState<any>();
    const router = useRouter()

    const createUser = async (data: any) => {
        try {
            setData(JSON.stringify(data));
            let newUser = {
                name: data.name,
                email: data.email,
                password: sha512(data.password),
                type: "customer",
            }

            const response = await fetch("https://rockstars8g-backend.herokuapp.com/user", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(newUser)
            });

            return response.status;
        } catch (error) {
            throw error;
        }
    }

    const loginUser = async (data: any) => {
        try {
            setData(JSON.stringify(data));
            let loginUser = {
                email: data.email,
                password: sha512(data.password),
            }

            await fetch("https://rockstars8g-backend.herokuapp.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(loginUser)
            })
            .then((res)=> res.json())
            .then((data) => setUser(data));

            if(user !== "") {
                router.push('/explore')
            }
        } catch (error) {
            throw error;
        }
    }

    return (
        <>
            <Navbar type="login"></Navbar>
            <Box sx={styles.background}>
                <Typography sx={styles.title}>
                    {mode === "login" && (<>Hello, there!</>)}
                    {mode === "signup" && (<>Join the community of coding musicians!</>)}
                </Typography>
                <Typography sx={styles.text}>
                    {mode === "login" && (<>Welcome back! You've been missed.</>)}
                    {mode === "signup" && (<>Please, enter your information.</>)}
                </Typography>
                {mode === "login" && (
                    <>
                        <form onSubmit={handleSubmit((data) => loginUser(data))}>
                            <Stack direction="column" alignItems="center" spacing={5}>
                                <TextField
                                    className="login-input"
                                    {...register("email")}
                                    placeholder="Enter email"
                                    type="email"
                                />
                                <TextField
                                    className="login-input"
                                    {...register("password")}
                                    placeholder="Password"
                                    type="password"
                                />
                                <Button sx={ styles.loginButton } type="submit"> Log in </Button>
                            </Stack>
                        </form>
                        <Typography sx={styles.tinyText}>Not a member?
                            <Link sx={styles.linkText} onClick={() => { router.push('/signup') }}> Register here!</Link>
                        </Typography>
                    </>
                )}
                {mode === "signup" && (
                    <>
                        <form onSubmit={handleSubmit((data) => createUser(data))}>
                            <Stack direction="column" alignItems="center" spacing={5}>
                                <TextField
                                    className="login-input"
                                    {...register("name")}
                                    placeholder="Enter name"
                                    type="text"
                                />
                                <TextField
                                    className="login-input"
                                    {...register("email")}
                                    placeholder="Email"
                                    type="email"
                                />
                                <TextField
                                    className="login-input"
                                    {...register("password")}
                                    placeholder="Password"
                                    type="password"
                                />
                                <Button sx={ styles.loginButton } type="submit"> Sign up! </Button>
                            </Stack>
                        </form>
                        <Typography sx={styles.tinyText}>Already a member?
                            <Link sx={styles.linkText} onClick={() => { router.push('/login') }}> Login here!</Link>
                        </Typography>
                    </>
                )}
            </Box>
        </>
    )
}