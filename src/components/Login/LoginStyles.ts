import { Styles } from "../../styles/types";

export const styles: Styles = {
    background: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#E6E9F1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },

    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
    },
    
    text: {
        fontSize: "1.2rem",
        fontWeight: "normal",
        color: "black",
        margin: "1rem 0 3rem 0"
    },

    tinyText: {
        fontSize: "0.8rem",
        fontWeight: "normal",
        color: "black",
        marginTop: "1rem",
    },

    linkText: {
        fontSize: "0.8rem",
        fontWeight: "normal",
        color: "#9EB6B4",
        cursor: "pointer",
        marginTop: "1rem",
    },

    loginButton: { 
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