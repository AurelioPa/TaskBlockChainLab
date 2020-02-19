import React from "react";
import Button from "@material-ui/core/Button";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: "#ff4081",
            main: "#6dbf67",
            dark: "#c51162",
            contrastText: "#fff"
        }
    }
});

const LedButton = props => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                startIcon={<WbIncandescentOutlinedIcon />}
                onClick={props.handleClick}
            >
                Switch LED
            </Button>
        </ThemeProvider>
    );
};

export default LedButton;
