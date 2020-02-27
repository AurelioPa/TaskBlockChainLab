import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import StateApi from "state-api";
import { port, host } from "config";

import App from "components/App";

const serverRender = async () => {
    const resp = await axios.get(`http://${host}:${port}/data`);
    const store = new StateApi(resp.data[0]);

    return {
        initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
        initialData: resp.data[0],
        lightAddress: resp.data[1]
    };
};

export default serverRender;
