import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Brightness6Icon from "@material-ui/icons/Brightness6";

export default function Brightness(props) {
    return (
        <div className="slider">
            <Grid container spacing={2}>
                <Grid item>
                    <Brightness6Icon />
                </Grid>
                <Grid item xs>
                    <Slider
                        min={0}
                        max={255}
                        value={props.bri}
                        onChange={e => props.handleChange(e.target.value)}
                        aria-labelledby="continuous-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
