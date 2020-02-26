import React from "react";

import Item from "components/Item";

export default class App extends React.Component {
    state = this.props.store.getState();

    handleClick() {
        this.setState(prevState => {
            return {
                ledOn: !prevState.ledOn
            };
        });
    }

    render() {
        //console.info(this.state.lights);
        // const lights = Object.keys(this.state.lights).map(item => {
        //     <Item
        //         key={item}
        //         handleClick={this.handleClick}
        //         state={this.state}
        //     />;
        // });
        return <></>;
    }
}
