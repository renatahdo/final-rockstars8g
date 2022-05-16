import { Styles } from "../../styles/types";

export const styles: Styles = {
    background: {
        left: 0,
        marginTop: "45rem",
        width: "100%",
        backgroundColor: "white",
    },

    container: {
        width: "80%",
        margin: "auto",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    songsContainer: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
    },

    albumsContainer: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
    },
    
    title: {
        width: "100%",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "black",
        marginBottom: "2rem",
    },

    albumCoverContainer: { 
        width: "100%",
        padding: "0 0 2rem 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },

    createAlbumButton: { 
        width: 250,
        height: 56,
        margin: "0 auto",
        textTransform: "none",
        color: "white",
        fontFamily: "Poppins",
        fontSize: "1rem",
        backgroundColor: "#9EB6B4",
        border: 'none',
        borderRadius: "3rem",
        "&:hover": {
            backgroundColor: '#778987',
            border: 'none',
            color: "white",
        },
    },
};