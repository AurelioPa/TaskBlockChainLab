import express from "express";
import { port } from "./config";
import axios from "axios";
import fs from "fs";

import serverRender from "renderers/server";

const app = express();

const findGateway = () => {
    axios
        .get("https://dresden-light.appspot.com/discover")
        .then(res => {
            authenticate(
                res.data[0].internalipaddress,
                res.data[0].internalport
            );
        })
        .catch(err => {
            console.info(err);
        });
};

const authenticate = (iAddress, iPort) => {
    const www = "http://" + iAddress + ":" + iPort + "/" + "api/";
    const pww = "ZGVsaWdodDoxMDEwMTAxMA==";
    const config = {
        headers: { Authorization: "Basic " + pww }
    };
    axios
        .post(www, { devicetype: "x" }, config)
        .then(res => {
            lightsRequest(www, res.data[0].success.username);
        })
        .catch(err => {
            console.info(err, "Error on Authentication");
        });
};

const lightsRequest = (www, username) => {
    axios
        .get(www + username + "/lights")
        .then(res => {
            fs.writeFile(
                "src/lightsData.json",
                JSON.stringify(res.data),
                err => {
                    if (err) {
                        throw err;
                    }
                    console.info("Replaced!");
                }
            );
        })
        .catch(e => {
            console.info(e);
        });
};

app.use(express.static("dist"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    findGateway();
    const initialContent = serverRender();
    res.render("index", { initialContent });
});

app.listen(port, () => {
    console.info(`Running on ${port}`);
});
