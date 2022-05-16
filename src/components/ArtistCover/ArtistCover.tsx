import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { styles } from "./ArtistCoverStyles";
import { Styles } from "../../styles/types";
import ArtistCoverProps from "./ArtistCoverTypes";

export const ArtistCover: FC<ArtistCoverProps> = ({ artist }) => {

    const stylesArtistCover: Styles = {
        cover: {
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url("${artist?.coverImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
        },
    }

    return (
        <Box sx={ stylesArtistCover.cover }>
            {artist?.stageName !== "" && (
                <>
                    <Typography sx={styles.title}>{artist?.stageName}</Typography>
                    <Stack
                        marginLeft="15rem"
                        direction="row"
                        justifyContent="start"
                        alignItems="center"
                        spacing={2}
                    >
                        {artist?.genres?.map((genre: string) => {return(
                            <Box sx={ styles.genre } key={genre}>
                                <Typography sx={styles.text}>{genre}</Typography>
                            </Box>
                        )})}
                    </Stack>
                </>
            )}
        </Box>
    )
}