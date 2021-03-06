const path = require('path');

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, "client", "asset", "javascript"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};