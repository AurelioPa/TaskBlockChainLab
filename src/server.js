import express from "express";
import { port } from "./config";
import serverRender from "renderers/server";

const app = express();

app.use(express.static("dist"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const initialContent = serverRender();
    res.render("index", { initialContent });
});

app.listen(port, () => {
    console.info(`Running on ${port}`);
});
