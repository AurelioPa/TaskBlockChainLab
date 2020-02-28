import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import { port, host } from "config";

import App from "components/App";

const serverRender = async () => {
    const resp = await axios.get(`http://${host}:${port}/data`);
    const store = resp.data;

    return {
        initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
        initialData: store
    };
};

export default serverRender;
