import React from "react";
import Switch from "@material-ui/core/Switch";
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

const OnOff = props => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <span style={{ color: "white" }}> OFF </span>
                <Switch color="secondary" checked={props.state.ledOn} />
                <span style={{ color: "white" }}> ON</span>
            </div>
        </ThemeProvider>
    );
};

export default OnOff;
