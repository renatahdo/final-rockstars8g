import { FC, useState, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "../../src/components/Navbar/Navbar";
import { ArtistCover } from "../../src/components/ArtistCover/ArtistCover";
import { ExploreAlbums } from "../../src/components/ExploreAlbums/ExploreAlbums";
import { IArtist } from "../../src/models/Artist";

const ExplorePage: FC = () => {
    const [artist, setArtist] = useState<any>();

    useEffect(() => {
        const getArtist = async () => {
            const ids = ["627b35d06c3d09b9e456712a", "627b35f76c3d09b9e456712c", "627b13796c3d09b9e45670da"]
            const randomNum = await Math.round(Math.random() * (2 - 0) + 0);
            const response = await fetch(`https://rockstars8g-backend.herokuapp.com/artist/${ids[randomNum]}`);
            const artistInfo: IArtist = await response.json();
            setArtist(artistInfo)
        }
        getArtist()
    }, []);

    return(
         <>
            <Head>
                <title>Renify | Explore new music</title>
                <meta name="description" content="Music store for Rockstars Generation 8G by Renata Hurtado Moreno" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar type="primary"></Navbar>
            <ArtistCover artist={artist}></ArtistCover>
            <ExploreAlbums />
        </>
    )
}

export default ExplorePage;