import React from "react";
import axios from "axios";

import Item from "components/Item";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lights: [this.props.store]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState(prevState => {
            const update = prevState.lights.map((it, index) => {
                if (Object.keys(it)[index] === id) {
                    if (Object.values(it)[index].state.on) {
                        axios
                            .put("/lights/" + id, {
                                on: false
                            })
                            .then(res => {
                                if ("success" in res.data[0]) {
                                    Object.values(it)[index].state.on = false;
                                    this.forceUpdate();
                                }
                            });
                    } else {
                        axios
                            .put("/lights/" + id, {
                                on: true
                            })
                            .then(res => {
                                if ("success" in res.data[0]) {
                                    Object.values(it)[index].state.on = true;
                                    this.forceUpdate();
                                }
                            });
                    }
                }
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
