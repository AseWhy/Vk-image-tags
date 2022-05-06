const { exec } = require("child_process");
const { mkdir, access, readdir, stat, copyFile, lstat, unlink, rmdir } = require("fs/promises");
const { join } = require("path");

const config = require("./build/config.json");

async function exists(path) {
    try {
        return await access(path) ?? true;
    } catch(e) {
        return false;
    }
}

async function deleteFolderRecursive(path) {
    if(await exists(path) ) {
        for(const file of await readdir(path)) {
            const curPath = join(path, file);
            const stats = await lstat(curPath);

            if(stats.isDirectory()) {
                await deleteFolderRecursive(curPath);
            } else {
                await unlink(curPath);
            }
        }

        await rmdir(path);
    }
};

async function copyRecursiveSync(src, dest) {
    if(await exists(src)) {
        const stats = await stat(src);
        const isDirectory = stats.isDirectory();

        if (isDirectory) {
            await mkdir(dest);
            
            for(const childItemName of await readdir(src)) {
                await copyRecursiveSync(
                    join(src, childItemName),
                    join(dest, childItemName)
                );
            }
        } else {
            await copyFile(src, dest);
        }
    }
};

async function getBuilders(root = __dirname) {
    const scan = await readdir(root);
    const builders = {};

    for(const current of scan) {
        const path = join(root, current);
        const info = await stat(path);

        if(info.isDirectory()) {
            builders[current] = require(join(path, current + ".deploy.js"));
        }
    }

    return builders;
}

void function() {
    const buildProcess = exec("webpack --mode production");

    buildProcess.stdout.pipe(process.stdout);

    buildProcess.on("exit", async () => {
        const fullDistFolder = join(__dirname, config.distFolder);

        if(!(await exists(fullDistFolder))) {
            await mkdir(fullDistFolder);
        }

        const builders = await getBuilders(join(__dirname, config.variantsFolder));
        const buildersValues = Object.keys(builders);

        for(const builder of buildersValues) {
            try {
                const builderDistFolder = join(fullDistFolder, builder);

                if(!(await exists(builderDistFolder))) {
                    await mkdir(builderDistFolder);
                }

                await deleteFolderRecursive(builderDistFolder);
  
                const dest = await builders[builder]();

                if(dest != null) {
                    await copyRecursiveSync(dest, builderDistFolder);
                    await deleteFolderRecursive(dest);
                }
            } catch(e) {
                console.error(e);
            }
        }
    });

    buildProcess.on("error", (err) => {
        console.error("Error when building", err)
    });
}();