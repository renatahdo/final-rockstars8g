import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar } from "../../src/components/Navbar/Navbar";
import { ArtistCover } from "../../src/components/ArtistCover/ArtistCover";
import { AlbumSongs } from "../../src/components/AlbumSongs/AlbumSongs";
import { IAlbum } from "../../src/models/Album";
import { IArtist } from "../../src/models/Artist";

const AlbumPage: FC = () => {
    const router = useRouter()
    const { query } = router
    const { slug } = query
    const [album, setAlbum] = useState<any>();
    const [artist, setArtist] = useState<any>();
    const [songs, setSongs] = useState<any>();

    useEffect(() => {
        const getAlbumAndArtist = async () => {
            const responseAlbum = await fetch(`http://localhost:3001/album/${slug}`);
            const albumInfo: IAlbum = await responseAlbum.json();
            setAlbum(albumInfo);
            setSongs(albumInfo.songs);

            const responseArtist = await fetch(`http://localhost:3001/artist/${albumInfo.artists[0]._id}`);
            const artistInfo: IArtist = await responseArtist.json();
            setArtist(artistInfo);
        };

        getAlbumAndArtist();
    }, []);
    
    return(
        <>
           <Head>
               <title>Renify | {album?.name}</title>
               <meta name="description" content="Music store for Rockstars Generation 8G by Renata Hurtado Moreno" />
               <link rel="icon" href="/favicon.ico" />
           </Head>
           <Navbar type="primary"></Navbar>
           <ArtistCover artist={album?.artists[0]}></ArtistCover>
           <AlbumSongs album={album} artist={artist} songs={songs}/>
       </>
   )
}
export default AlbumPage