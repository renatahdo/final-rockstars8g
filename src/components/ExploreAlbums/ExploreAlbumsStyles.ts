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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "5rem",
    },
    
    title: {
        width: "100%",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginLeft: "2rem",
        color: "black",
    },

    albumCoverContainer: { 
        width: "100%",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },

    createAlbumBotton: { 
        width: 350,
        height: 56,
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