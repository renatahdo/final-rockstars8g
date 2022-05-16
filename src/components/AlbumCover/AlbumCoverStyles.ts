import { Styles } from "../../styles/types";

export const styles: Styles = {

    albumTitle: {
        width: "100%",
        fontSize: "1rem",
        fontWeight: "bold",
        marginTop: "1.5rem",
        color: "#000",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        },
    },

    artistTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#DBDBDB",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        },
    },

    stockText: {
        fontSize: "0.8rem",
        fontWeight: "normal",
        color: "#000",
    },

    digitalText: {
        fontSize: "0.8rem",
        fontWeight: "bold",
        color: "#000",
    },
};