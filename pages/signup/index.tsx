import { FC } from "react";
import { Login } from "../../src/components/Login/Login";
import Head from "next/head";

const SignUpPage: FC = () => {
    return (
        <>
            <Head>
                <title>Renify | Create account</title>
                <meta name="description" content="Music store for Rockstars Generation 8G by Renata Hurtado Moreno" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login mode="signup" />
        </>
    )
}

export default SignUpPage;