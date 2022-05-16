import { Styles } from "../../styles/types";

export const styles: Styles = {
    background: {
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#E6E9F1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        paddingBottom: "5rem",
    },

    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        marginTop: "10rem",
    },
    
    text: {
        fontSize: "1.2rem",
        fontWeight: "normal",
        color: "black",
        margin: "1rem 0 3rem 0"
    },

    label: {
        fontSize: "1rem",
        fontWeight: "normal",
        color: "black",
        marginBottom: "0.5rem",
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