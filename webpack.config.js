const path = require("path");

module.exports = {
    resolve: {
        modules: [path.resolve("./src"), path.resolve("./node_modules")]
    },
    entry: ["@babel/polyfill", "./src/renderers/DOM.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
