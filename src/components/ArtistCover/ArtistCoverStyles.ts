import { Styles } from "../../styles/types";

export const styles: Styles = {
    background: {
        top: 0,
        left: 0,
        width: "100%",
        overflowY: "scroll",
        display: "flex",
        alignItems: "flex-start",
    },
    
    title: {
        fontSize: "5.5rem",
        fontWeight: "bold",
        color: "white",
        marginTop: "15rem",
        marginLeft: "15rem",
        textShadow: "2px 2px #0002",
    },

    text: {
        fontSize: "1.2",
        color: "white",
    },

    genre: {
        backgroundColor: "#9EB6B4",
        opacity: 0.9,
        border: "none",
        borderRadius: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
};