import { Styles } from "../../styles/types";

export const styles: Styles = {
    background: {
        left: 0,
        marginTop: "45rem",
        width: "100%",
        height: "70vh",
        backgroundImage: `url("join-community.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    container: {
        width: "70%",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    
    title: {
        width: "100%",
        fontSize: "3.5rem",
        fontWeight: "bold",
        color: "black",
    },

    text: {
        width: "100%",
        fontSize: "1.2rem",
        fontWeight: "normal",
        color: "black",
        margin: "1rem 0"
    },

    signUpButton: { 
        height: 56,
        alignSelf: "end",
        margin: "1rem 0",
        padding: "0 2rem",
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