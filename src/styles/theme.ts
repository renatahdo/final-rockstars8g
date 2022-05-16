import { createTheme } from "@mui/material/styles";
import "typeface-league-script";
import "typeface-poppins";
import "typeface-dm-serif-display";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'DM Serif Display',
            'League Script',
            'Roboto',
        ].join(','),
    },
    components: {
      MuiTextField: {
        defaultProps: {
          sx: { height: 50, width: 350 }
        },
        styleOverrides: {
          root: {
            zIndex: 30,
            // marginTop: 40,

            "& placeholder": {
              color: `white`
            },

            "& label": {
              color: `white`
            },
            "& legend": {
              color: `white`
            },
  
            // this is styles for the new variants
            "&.subvariant-hovered": {
              "& fieldset": {
                backgroundColor: "#FFF5",
                border: "none",
                borderRadius: "3rem",
              },
              "& .MuiInputBase-input:hover + fieldset": {
                color: "white",
              },
              "& .MuiInputBase-input:focus + fieldset": {
                color: "white",
              },

              '& .MuiInputBase-root': {
                color: "white",
              },
            },

            "&.subvariant-position": {
              "& fieldset": {
                backgroundColor: "#0001",
                border: "none",
                borderRadius: "3rem",
              },
              "& .MuiInputBase-input:hover + fieldset": {
                color: "black",
              },
              "& .MuiInputBase-input:focus + fieldset": {
                color: "black",
              },

              '& .MuiInputBase-root': {
                color: "black",
              },
            },

            "&.login-input": {
              "& fieldset": {
                backgroundColor: "#FFF8",
                color: "black",
                border: "none",
                borderRadius: "3rem",
              },
              "& .MuiInputBase-input:hover + fieldset": {
                color: "black",
              },
              "& .MuiInputBase-input:focus + fieldset": {
                color: "black",
              },

              '& .MuiInputBase-root': {
                color: "black",
              },
            },
          }
        }
      },
      MuiSelect: {
        defaultProps: {
          sx: { height: 50, width: 350 }
        },
        styleOverrides: {
          select: {
            backgroundColor: "#FFF5",
            borderRadius: "3rem",

            "& placeholder": {
              color: `white`
            },

            "& label": {
              color: `white`
            },
            "& legend": {
              color: `white`
            },

            "&:focus": {
              border: "none",
            }
          }
        }
      }
    }
});