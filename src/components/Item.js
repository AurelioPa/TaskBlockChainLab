import React from "react";
import OnOff from "./OnOff";
import LedButton from "./LedButton";
// import Brightness from "./Brightness";

const Item = props => {
    return (
        <div className="paper">
            <LedButton
                handleClick={() => props.handleClick(props.light)}
                state={props.state}
            />
            <OnOff state={props.state.on} />
            {/* <Brightness /> */}
        </div>
    );
};

export default Item;
