const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const indexHtmlTemplate = require('../templates/index-html.template');
const { decamelize } = require("../common/utils");

module.exports.run = (widgetName = "", options = {}) => {
    const widgetDir = path.resolve(process.env.PWD, widgetName);
    if (fs.existsSync(widgetDir)) {
        return console.log(`Widget ${widgetDir} already exists!`);
    }

    fs.mkdirSync(widgetDir);

    const htmlPath = path.resolve(widgetDir, 'index.html');
    const className = decamelize(widgetName);
    fs.writeFileSync(htmlPath, indexHtmlTemplate({ className }), { flag: 'wx' });
    console.log(`Created ${widgetDir}`);

    execSync(`cd ${widgetName} && git init && git add . && git commit -m'init commit'`);
};
