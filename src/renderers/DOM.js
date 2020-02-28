import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";

const store = window.initialData;

ReactDOM.hydrate(<App store={store} />, document.getElementById("mountNode"));
