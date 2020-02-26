import React from "react";
import OnOff from "./OnOff";
import LedButton from "./LedButton";

const Item = props => {
    return (
        <div className="paper">
            <LedButton handleClick={props.handleClick} />
            <OnOff state={props.state} />
        </div>
    );
};

export default Item;
