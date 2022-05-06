const buildmap = require("./buildConfig/buildmap.json");
const { readFile, writeFile, copyFile } = require("fs/promises");
const { join } = require("path");

module.exports = async function() {
    const distFolder = buildmap.distFolder;
    const paths = buildmap.paths;

    let mainifest = await readFile(join(__dirname, "/buildConfig/manifest.json"), "utf-8");

    if(mainifest != null) {
        mainifest = mainifest.replace(/@{(.+)}/g, (m, g1) => {
            const executable = paths[g1];

            if(executable != null) {
                return join("./", g1, executable);
            } else {
                throw new Error("Cannot resolve " + g1);
            }
        });
    }

    await writeFile(join(__dirname, distFolder, "manifest.json"), mainifest);
    await copyFile(join(__dirname, "/buildConfig/icon.png"), join(__dirname, distFolder, "icon.png"))

    return join(__dirname, distFolder);
}