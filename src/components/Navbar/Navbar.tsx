import { FC } from "react";
import { InputAdornment, Button, Box, TextField, Typography, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavbarProps from "./NavbarTypes";
import { useRouter } from "next/router";
import { Styles } from "../../styles/types";
import useScrollPosition from '../../hooks/useScrollPosition'

export const Navbar: FC<NavbarProps> = ({ type }) => {
    const router = useRouter()
    const scrollPosition = useScrollPosition()

    const styles: Styles = {
        navbar: {
            top: 0,
            left: 0,
            width: "100%",
            height: 100,
            backgroundColor: scrollPosition > 70 ? "#FFF" : "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 100,
            position: "fixed",
        },

        form: {
            top: 0,
            left: 0,
            width: "100%",
            height: 100,
            backgroundColor: scrollPosition > 10 ? "#E6E9F1" : "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 100,
            position: "fixed",
        },

        whiteLogo: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: scrollPosition > 70 ? "#000" : "#FFF",
            zIndex: 100,
            marginLeft: "2rem",
            cursor: "pointer"
        },
    
        text: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: scrollPosition > 70 ? "#000" : "#FFF",
            zIndex: 100,
            marginLeft: "2rem",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "#FFF",
            },
        },

        blackText: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#000",
            zIndex: 100,
            marginLeft: "2rem",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "#000",
            },
        },
    
        blackLogo: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#000",
            zIndex: 100,
            marginLeft: "2rem",
            cursor: "pointer"
        },
    
        loginButton: { 
            width: 130,
            height: 56,
            textTransform: "none",
            color: scrollPosition > 70 ? "#000" : "#FFF",
            fontFamily: "Poppins",
            fontSize: "1rem",
            border: ".5px solid",
            borderColor: scrollPosition > 70 ? "#0004" : "#FFF9",
            borderRadius: "3rem",
            marginLeft: "2rem",
            marginRight: "2rem",
            zIndex: 100,
            "&:hover": {
                backgroundColor: scrollPosition > 70 ? "#9EB6B4" : "#FFF",
                border: "none",
                color: scrollPosition > 70 ? "#FFF" : "#9EB6B4",
            },
        },

        loginButtonNoScroll: { 
            width: 130,
            height: 56,
            textTransform: "none",
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "1rem",
            border: ".5px solid",
            borderColor: "#0004",
            borderRadius: "3rem",
            marginLeft: "2rem",
            marginRight: "2rem",
            zIndex: 100,
            "&:hover": {
                backgroundColor: "#9EB6B4",
                border: "none",
                color: "#FFF",
            },
        },
    }

    return (
        <>
            {type === "home" && (
                <Box sx={styles.navbar}>
                    <Typography sx={styles.whiteLogo} onClick={() => { router.push('/') }}>Renify</Typography>
                    <Box>
                        <TextField
                            className={scrollPosition > 70 ? "subvariant-position" : "subvariant-hovered"}
                            label="Search"
                            InputLabelProps={{
                                style: { color: scrollPosition > 70 ? "black" : "white", paddingLeft: 15},
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{
                                        width: "4rem",
                                        color: scrollPosition > 70 ? "black" : "white",
                                        paddingRight: 2 }}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button sx={styles.loginButton} onClick={() => { router.push('/login') }}>
                            Log in
                        </Button>
                    </Box>
                </Box>
            )}
            {type === "login" && (
                <Box sx={styles.navbar}>
                    <Typography sx={styles.blackLogo} onClick={() => { router.push('/') }}>Renify</Typography>
                </Box>
            )}
            {type === "primary" && (
                <Box sx={styles.navbar}>
                    <Typography sx={styles.whiteLogo} onClick={() => { router.push('/') }}>Renify</Typography>
                    <Box>
                        <Link sx={styles.text} onClick={() => { router.push('/explore') }}>Explore</Link>
                        <Link sx={styles.text} onClick={() => { router.push('/artist') }}>Artists</Link>
                    </Box>
                    <Box>
                        <TextField
                            className={scrollPosition > 70 ? "subvariant-position" : "subvariant-hovered"}
                            label="Search"
                            InputLabelProps={{
                                style: { color: scrollPosition > 70 ? "black" : "white", paddingLeft: 15},
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{
                                        width: "4rem",
                                        color: scrollPosition > 70 ? "black" : "white",
                                        paddingRight: 2 }}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button sx={ styles.loginButton } onClick={() => { router.push('/') }}>
                            Log out
                        </Button>
                    </Box>
                </Box>
            )}
            {type === "secondary" && (
                <Box sx={styles.form}>
                    <Typography sx={styles.blackLogo} onClick={() => { router.push('/') }}>Renify</Typography>
                    <Box>
                        <Link sx={styles.blackText} onClick={() => { router.push('/explore') }}>Explore</Link>
                        <Link sx={styles.blackText} onClick={() => { router.push('/artist') }}>Artists</Link>
                    </Box>
                    <Box>
                        <TextField
                            className="subvariant-position"
                            label="Search"
                            InputLabelProps={{
                                style: { color: "black", paddingLeft: 15},
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{
                                        width: "4rem",
                                        color: "black",
                                        paddingRight: 2 }}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button sx={ styles.loginButtonNoScroll } onClick={() => { router.push('/') }}>
                            Log out
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    )
}