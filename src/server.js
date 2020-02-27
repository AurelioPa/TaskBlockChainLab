import express from "express";
import { port } from "./config";
//import data from "./gatewayData";
import axios from "axios";

import serverRender from "renderers/server";

const app = express();

let www = "";
const pww = "ZGVsaWdodDoxMDEwMTAxMA==";
const config = {
    headers: { Authorization: "Basic " + pww }
};
let username = "";
let dataw = {};

const findGateway = async () => {
    await axios
        .get("https://dresden-light.appspot.com/discover")
        .then(
            res =>
                (www =
                    "http://" +
                    res.data[0].internalipaddress +
                    ":" +
                    res.data[0].internalport +
                    "/" +
                    "api/")
        )
        .catch(err => {
            console.info(err);
            // });
        });
};

const authenticate = async () => {
    await axios
        .post(www, { devicetype: "ZigX" }, config)
        .then(res => {
            username = res.data[0].success.username;
        })
        .catch(err => {
            console.info(err, "Error on Authentication");
        });
};

const lightsRequest = async () => {
    await axios
        .get(www + username + "/lights")
        .then(res => {
            dataw = res.data;
        })
        .catch(e => {
            console.info(e);
        });
};

app.use(express.static("dist"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const initialContent = await serverRender();
    res.render("index", { ...initialContent });
});

app.get("/data", async (req, res) => {
    await findGateway();
    await authenticate();
    await lightsRequest();
    res.send([dataw, www + username + "/lights/"]);
});

app.listen(port, () => {
    console.info(`Running on ${port}`);
});
