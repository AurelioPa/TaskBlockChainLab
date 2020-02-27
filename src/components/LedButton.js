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
    const text = props.state.on ? "Light is ON" : "Light is OFF";
    return (
        <ThemeProvider theme={theme}>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                startIcon={<WbIncandescentOutlinedIcon />}
                onClick={props.handleClick}
            >
                {text}
            </Button>
        </ThemeProvider>
    );
};

export default LedButton;
