import React from "react";

import OnOff from "./OnOff";
import LedButton from "./LedButton";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ledOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                ledOn: !prevState.ledOn
            };
        });
    }

    render() {
        return (
            <div className="paper">
                <LedButton handleClick={this.handleClick} />
                <OnOff state={this.state} />
            </div>
        );
    }
}
