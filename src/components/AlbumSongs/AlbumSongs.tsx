import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { styles } from "./AlbumSongsStyles";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import AlbumSongsProps from "./AlbumSongsTypes";

export const AlbumSongs: FC<AlbumSongsProps> = ({ album, artist, songs }) => {
    const [songsParsed, setSongsParsed] = useState<any>()
    const router = useRouter()
    
    useEffect(() => {
        const songsFormatted = async(songs: any[], album: any) => {
            let newSongs: any = []
            songs?.map(async(song: any) => {
                const newSong = {
                    name: song.name,
                    albumName: album.name,
                    duration: song.duration,
                }
    
                await newSongs.push(newSong);
            })

            await setSongsParsed(newSongs)
            return newSongs;
        }

        songsFormatted(songs, album);
    }, [artist])

    return (
        <Box sx={styles.background}>
            <Box sx={styles.container}>
                <Box sx={styles.songsContainer}>
                    <Typography sx={styles.title}>Songs - {album?.name}</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 100 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>TItle</TableCell>
                                <TableCell align="center">Album</TableCell>
                                <TableCell align="center">Duration</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {songsParsed?.map((song: any) => (
                                <TableRow
                                    key={song.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {song.name}
                                </TableCell>
                                <TableCell align="center">{song.albumName}</TableCell>
                                <TableCell align="center">{song.duration}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={styles.albumsContainer}>
                    <Typography sx={styles.title}>Other albums - {artist?.stageName}</Typography>
                    <Box sx={styles.albumCoverContainer}>
                        {artist?.albums?.map((album: any) => { return(
                            <div key={album._id}>
                                <AlbumCover
                                    artistName={artist.stageName}
                                    albumName={album.name}
                                    albumCover={album.coverImage}
                                    stock={album.stock}
                                    albumId={album._id}
                                    artistId={album.artists[0]?._id}
                                />
                            </div>
                        )})}
                    </Box>
                    <Button sx={styles.createAlbumButton} onClick={() => { router.push('/album/create') }}>
                        Create new album
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}