import { FC } from "react";
import { Box, Typography, Link } from "@mui/material";
import { styles } from "./AlbumCoverStyles";
import { Styles } from "../../styles/types";
import { useRouter } from "next/router";
import AlbumCoverProps from "./AlbumCoverTypes";

export const AlbumCover: FC<AlbumCoverProps> = ({ artistName, albumName, albumCover, stock, albumId, artistId }) => {
    const router = useRouter()

    const stylesArtistCover: Styles = {
        albumCover: {
            width: "14rem",
            height: "14rem",
            backgroundImage: `url("${albumCover}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "0 5px 10px 4px #00000020",
            marginBottom: "1.5rem",
            cursor: "pointer",
            "&:hover": {
                boxShadow: "0px 0px 10px 4px #77898790",
            },
        },
    }

    return (
        <Box sx={{ margin: "0 1rem 1rem 1rem", width: "14rem" }}>
            <Link onClick={() => { router.push(`/album/${albumId}`) }}>
                <Box sx={stylesArtistCover.albumCover} />
            </Link>
            <Link sx={styles.albumTitle} onClick={() => { router.push(`/album/${albumId}`) }}>{albumName} {stock === undefined && (
                <i>(DV)</i>
            )}</Link>
            <Box sx={{ display: "flex", direction: "row", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                <Link sx={styles.artistTitle} onClick={() => { router.push(`/artist/${artistId}`) }}>{artistName}</Link>
                {stock !== undefined && (
                    <Typography sx={styles.stockText}>Stock: {stock}</Typography>
                )}
            </Box>
        </Box>
    )
}