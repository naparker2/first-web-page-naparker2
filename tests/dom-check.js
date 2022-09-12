const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const dom = new JSDOM(fs.readFileSync("./index.html", "utf8"));
module.exports = dom;
