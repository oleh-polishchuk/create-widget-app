const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const indexHtmlTemplate = require('../templates/index-html.template');
const gitIgnoreTemplate = require('../templates/git-ignore.template');
const readMeTemplate = require('../templates/readme.template');
const screenshotTemplate = require('../templates/screenshot.template');
const { decamelize } = require("../common/utils");

module.exports.run = (widgetName = "", options = {}) => {
    const widgetDir = path.resolve(process.env.PWD, widgetName);
    if (fs.existsSync(widgetDir)) {
        return console.log(`[create-widget-app] Widget ${widgetDir} already exists!`);
    } else {
        fs.mkdirSync(widgetDir);
        console.log(`[create-widget-app] Created ${widgetDir}`);
    }

    indexHtmlTemplate.render(widgetDir, { className: decamelize(widgetName) });
    gitIgnoreTemplate.render(widgetDir)
    readMeTemplate.render(widgetDir, { className: decamelize(widgetName) });
    screenshotTemplate.render(widgetDir)

    execSync(`cd ${widgetName} && git init && git add . && git commit -m'init commit'`);
    console.log('Done!')
};
