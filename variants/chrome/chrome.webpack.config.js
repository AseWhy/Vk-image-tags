const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildmap = require("./buildConfig/buildmap.json");
const path = require("path");

module.exports = (common) => [
    Object.assign({}, common, {
        name: "background",
        entry: path.join(__dirname, "src/background/index.ts"),
        output: {
            path: path.join(__dirname, buildmap.distFolder, "background"),
            filename: "index.js"
        },
    }),
    Object.assign({}, common, {
        name: "pupup",
        entry: path.join(__dirname, "src/popup/index.ts"),
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src/popup/index.html')
            }),
        ],
        output: {
            path: path.resolve(__dirname, buildmap.distFolder, 'popup'),
        }
    })
];