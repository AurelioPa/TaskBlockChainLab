import React from "react";
import ReactDOMServer from "react-dom/server";
import ServerApp from "components/ServerApp";

export default function serverRender() {
    return ReactDOMServer.renderToString(<ServerApp />);
}
