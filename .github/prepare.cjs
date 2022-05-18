const { writeFileSync } = require("fs");
const { resolve } = require("path");

const pkg = require("../package.json");
pkg.version = process.env.VERSION;
pkg.type = "module"

writeFileSync(resolve(__dirname, "../package.json"), Buffer.from(JSON.stringify(pkg, null, "\t") + "\n"));
