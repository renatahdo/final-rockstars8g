import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../../../src/components/Navbar/Navbar";
import { AlbumCreate } from "../../../src/components/AlbumCreate/AlbumCreate";

const AlbumCreatePage: FC = () => {    
    return(
        <>
           <Head>
               <title>Renify | Create Album</title>
               <meta name="description" content="Music store for Rockstars Generation 8G by Renata Hurtado Moreno" />
               <link rel="icon" href="/favicon.ico" />
           </Head>
           <Navbar type="secondary"></Navbar>
           <AlbumCreate />
       </>
    )
}

export default AlbumCreatePage