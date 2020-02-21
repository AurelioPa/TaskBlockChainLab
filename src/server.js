import express from "express";
import { port } from "./config";
import serverRender from "renderers/server";

const app = express();

app.use(express.static("dist"));

app.set("view engine", "ejs");

app.all("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/", (req, res) => {
    const initialContent = serverRender();
    res.render("index", { initialContent });
});

app.listen(port, () => {
    console.info(`Running on ${port}`);
});
