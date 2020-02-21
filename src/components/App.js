import React from "react";
import axios from "axios";

import OnOff from "./OnOff";
import LedButton from "./LedButton";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ledOn: true,
            address: "",
            port: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.findGateway = this.findGateway.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    findGateway() {
        axios
            .get("https://dresden-light.appspot.com/discover")
            .then(res => {
                this.setState({
                    address: res.data[0].internalipaddress,
                    port: res.data[0].internalport
                });
            })
            .then(() => {
                this.authenticate();
            })

            .catch(err => {
                console.info(err);
            });
    }

    authenticate() {
        this.state;
        const pww = "Basic ZGVsaWdodDoxMDEwMTAxMA==";
        const www =
            "http://" +
            this.state.address +
            ":" +
            this.state.port +
            "/" +
            "api";
        axios({
            method: "post",
            url: www,
            data: '{ devicetype: "myapp" }',
            headers: { authorization: "Basic " + pww }
        })
            .then(res => console.info(res))
            .catch(err => {
                console.info(err);
            });
    }

    handleClick() {
        this.setState(prevState => {
            return {
                ledOn: !prevState.ledOn
            };
        });
    }

    componentDidMount() {
        this.findGateway();
        //this.authenticate();
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
