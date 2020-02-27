import React from "react";
import ReactDOM from "react-dom";

import StateApi from "state-api";
import App from "components/App";

const store = new StateApi(window.initialData);
const address = window.lightAddress;

ReactDOM.hydrate(
    <App store={store} address={address} />,
    document.getElementById("mountNode")
);
