import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography, Button } from "@mui/material";
import { styles } from "./ExploreAlbumsStyles";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import { IAlbum } from "../../models/Album";

export const ExploreAlbums: FC = () => {
    const [albums, setAlbums] = useState<any[]>();
    const router = useRouter()

    useEffect(() => {
        const getAlbums = async () => {
            const response = await fetch(`http://localhost:3001/album`);
            const albumsInfo: IAlbum[] = await response.json();
            setAlbums(albumsInfo)
        }
        getAlbums()
    }, []);

    return (
        <Box sx={styles.background}>
            <Box sx={styles.container}>
                <Typography sx={styles.title}>Albums</Typography>
                <Box sx={styles.albumCoverContainer}>
                    {albums?.map((album: any) => { return(
                        <div key={album._id}>
                            <AlbumCover
                                artistName={album.artists[0]?.stageName}
                                albumName={album.name}
                                albumCover={album.coverImage}
                                stock={album.stock}
                                albumId={album._id}
                                artistId={album.artists[0]?._id}
                            />
                        </div>
                    )})}
                </Box>
                <Button sx={styles.createAlbumBotton} onClick={() => { router.push('/album/create') }}>
                    Create new album
                </Button>
            </Box>
        </Box>
    )
}