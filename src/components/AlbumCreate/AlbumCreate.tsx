/* eslint-disable react/no-unescaped-entities */
import { FC, useState, useEffect } from "react";
import { Stack, Button, Box, TextField, Typography, Select, MenuItem, InputAdornment, OutlinedInput } from "@mui/material";
import { useForm } from "react-hook-form";
import { styles } from "./AlbumCreateStyles";
import { useRouter } from "next/router";
import { IArtist } from "../../models/Artist";
import { IAlbum } from "../../models/Album";

export const AlbumCreate: FC = () => {
    const { register, handleSubmit } = useForm();
    const [newAlbum, setNewAlbum] = useState<any>();
    const [artists, setArtists] = useState<any>();
    const [downloadType, setDownloadType] = useState<string>();
    const [type, setType] = useState<string>();
    const [genre, setGenre] = useState<string>();
    const [artist, setArtist] = useState<any>();
    const [albumCreated, setAlbumCreated] = useState<boolean>(false);
    const router = useRouter()

    const createAlbum = async (data: any) => {
        try {
            let newAlbumData = {
                name: data?.name,
                pricePhysical: data?.pricePhysical,
                priceDigital: data?.priceDigital,
                stock: data?.stock,
                genres: [
                    data?.genre
                ],
                downloadType: data?.downloadType,
                type: data?.type,
                coverImage: data?.coverImage,
                releaseDate: data?.releaseDate,
                artists: [{
                    _id: data?.artist
                }],
            }
            
            await fetch("https://rockstars8g-backend.herokuapp.com/album", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(newAlbumData)
            })
            .then((res)=> res.json())
            .then((data) => setNewAlbum(data));

            // let newArtist: any = {}
            // await newArtist?.albums?.push(newAlbum._id);

            // await fetch(`http://localhost:3001/artist/${newAlbum._id}`, {
            //     method: "PUT",
            //     headers: { "Content-Type": "application/json", },
            //     body: JSON.stringify(newArtist)
            // });
            setTimeout(() => {
                setAlbumCreated(true);
            }, 1000);

            setTimeout(() => {
                router.push('/explore')
            }, 2000);
            
        } catch (error) {
            throw error;
        }
    }
    
    console.log(newAlbum);
    useEffect(() => {
        const getArtistsAndAlbums = async () => {
            const responseArtists = await fetch(`https://rockstars8g-backend.herokuapp.com/artist`);
            const artistsInfo: IArtist[] = await responseArtists.json();
            setArtists(artistsInfo)
        }
        getArtistsAndAlbums()
    }, []);

    return (
        <Box sx={styles.background}>
            <Typography sx={styles.title}>Create a new album</Typography>
            <Typography sx={styles.text}>Complete the information</Typography>
            <form onSubmit={handleSubmit((data) => createAlbum(data))}>
                <Stack direction="column" alignItems="center" spacing={5}>
                    <Box>
                        <Typography sx={styles.label}>Album name:</Typography>
                        <TextField
                            className="login-input"
                            {...register("name")}
                            placeholder="Enter album name"
                            type="text"
                        />
                    </Box>
                    <Box>
                        <Typography sx={styles.label}>Album type:</Typography>
                        <TextField select
                            className="login-input"
                            {...register("type")}
                            onChange={(event: any) => setType(event.target.value)}
                        >
                            <MenuItem value="single">Single</MenuItem>
                            <MenuItem value="album">Album</MenuItem>
                        </TextField>
                    </Box>
                    <Box>
                        <Typography sx={styles.label}>Download type:</Typography>
                        <TextField select
                            className="login-input"
                            {...register("downloadType")}
                            onChange={(event: any) => setDownloadType(event.target.value)}
                        >
                            <MenuItem value="physical">Physical</MenuItem>
                            <MenuItem value="digital">Digital</MenuItem>
                        </TextField>
                    </Box>
                    {downloadType === "digital" && (
                        <Box>
                            <Typography sx={styles.label}>Price:</Typography>
                            <TextField
                                className="login-input"
                                {...register("priceDigital")}
                                placeholder="Album price"
                                type="number"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                    ),
                                }}
                            />
                            </Box>
                    )}
                    {downloadType === "physical" && (
                        <>
                            <Box>
                                <Typography sx={styles.label}>Price:</Typography>
                                <TextField
                                    className="login-input"
                                    {...register("pricePhysical")}
                                    placeholder="Album price"
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography sx={styles.label}>Stock:</Typography>
                                <TextField
                                    className="login-input"
                                    {...register("stock")}
                                    placeholder="Stock"
                                    type="number"
                                />
                            </Box>
                        </>
                    )}
                    <Box>
                        <Typography sx={styles.label}>Cover image (URL):</Typography>
                        <TextField
                            className="login-input"
                            {...register("coverImage")}
                            placeholder="Enter URL"
                            type="text"
                        />
                    </Box>
                    {/* <Box>
                        <Typography sx={styles.label}>Cover image (File):</Typography>
                        <TextField
                            className="login-input"
                            {...register("coverImage")}
                            type="file"
                            />
                    </Box> */}
                    <Box>
                        <Typography sx={styles.label}>Release date:</Typography>
                        <TextField
                            className="login-input"
                            {...register("releaseDate")}
                            type="date"
                        />
                    </Box>
                    <Box>
                        <Typography sx={styles.label}>Genre:</Typography>
                        <TextField select
                            className="login-input"
                            {...register("genre")}
                            onChange={(event: any) => setGenre(event.target.value)}
                        >
                            <MenuItem value="Country">Country</MenuItem>
                            <MenuItem value="Electronic">Electronic</MenuItem>
                            <MenuItem value="Folk">Folk</MenuItem>
                            <MenuItem value="Hip-hop">Hip-hop</MenuItem>
                            <MenuItem value="J-pop">J-pop</MenuItem>
                            <MenuItem value="K-pop">K-pop</MenuItem>
                            <MenuItem value="Latino">Latino</MenuItem>
                            <MenuItem value="Pop">Pop</MenuItem>
                            <MenuItem value="Rap">Rap</MenuItem>
                            <MenuItem value="Rock">Rock</MenuItem>
                            <MenuItem value="R&B">R&B</MenuItem>
                        </TextField>
                    </Box>
                    <Box>
                        <Typography sx={styles.label}>Artist:</Typography>
                        <TextField select
                            className="login-input"
                            {...register("artist")}
                            onChange={(event: any) => setArtist(event.target.value)}
                            placeholder="Artist"
                        >
                            {artists?.map((artist: any) => {return(
                                    <MenuItem key={artist._id} value={artist._id}>{artist.stageName}</MenuItem>
                            )})}
                        </TextField>
                    </Box>
                    {albumCreated && (
                        <Typography sx={styles.label}>Album created. ✔️</Typography>
                    )}
                    <Button sx={styles.createAlbumBotton} type="submit"> Create </Button>
                </Stack>
            </form>
        </Box>
    )
}