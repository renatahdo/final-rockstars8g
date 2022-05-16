import { FC } from "react";
import { Login } from "../../src/components/Login/Login";
import Head from "next/head";

const LoginPage: FC = () => {
    return (
        <>
            <Head>
                <title>Renify | Login</title>
                <meta name="description" content="Music store for Rockstars Generation 8G by Renata Hurtado Moreno" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login mode="login" />
        </>
    )
}

export default LoginPage;