const { readdirSync, statSync } = require("fs");
const { join } = require("path");

const config = require("./build/config.json");

function getBuilders(root = __dirname) {
    const scan = readdirSync(root);
    const builders = {};

    for(const current of scan) {
        const path = join(root, current);
        const info = statSync(path);

        if(info.isDirectory()) {
            builders[current] = require(join(path, current + ".webpack.config.js"));
        }
    }

    return builders;
}

const commonConfig = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts|\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
};

module.exports = Object.values(getBuilders(join(__dirname, config.variantsFolder))).flatMap(e => e(commonConfig));