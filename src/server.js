import express from "express";
import { port } from "./config";
import data from "./gatewayData";

import serverRender from "renderers/server";

const app = express();

// function findGateway() {
//     return axios
//         .get("https://dresden-light.appspot.com/discover")
//         .then(res => {
//             return authenticate(
//                 res.data[0].internalipaddress,
//                 res.data[0].internalport
//             );
//         })
//         .catch(err => {
//             console.info(err);
//         });
// }

// const authenticate = (iAddress, iPort) => {
//     const www = "http://" + iAddress + ":" + iPort + "/" + "api/";
//     const pww = "ZGVsaWdodDoxMDEwMTAxMA==";
//     const config = {
//         headers: { Authorization: "Basic " + pww }
//     };
//     return axios
//         .post(www, { devicetype: "ZigX" }, config)
//         .then(res => {
//             return lightsRequest(www, res.data[0].success.username);
//         })
//         .catch(err => {
//             console.info(err, "Error on Authentication");
//         });
// };

// const lightsRequest = (www, username) => {
//     return axios
//         .get(www + username + "/lights")
//         .then(res => {
//             return res;
//         })
//         .catch(e => {
//             console.info(e);
//         });
// };

app.use(express.static("dist"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const initialContent = await serverRender();
    res.render("index", { ...initialContent });
});

app.get("/data", (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.info(`Running on ${port}`);
});
