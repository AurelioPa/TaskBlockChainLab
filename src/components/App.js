import React from "react";
import axios from "axios";

import Item from "components/Item";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lights: [this.props.store.getState()],
            address: this.props.address
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState(prevState => {
            const update = prevState.lights.map((it, index) => {
                if (Object.keys(it)[index] === id) {
                    if (Object.values(it)[index].state.on) {
                        axios.put(this.state.address + id + "/state", {
                            on: false,
                            bri: 254
                        });
                    } else {
                        axios.put(this.state.address + id + "/state", {
                            on: true,
                            bri: 254
                        });
                    }
                }
                Object.values(it)[index].state.on = !Object.values(it)[index]
                    .state.on;
                return it;
            });
            return {
                lights: update
            };
        });
    }

    render() {
        const items = this.state.lights.map((item, index) => {
            return (
                <Item
                    key={Object.values(item)[index].uniqueid}
                    state={Object.values(item)[index].state}
                    handleClick={this.handleClick}
                    light={Object.keys(item)[index]}
                />
            );
        });
        return <>{items}</>;
    }
}
