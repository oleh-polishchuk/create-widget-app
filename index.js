#!/usr/bin/env node

const argv = require('yargs').argv;

const [widgetName, options] = argv._;

try {
    require(`./commands/generate-widget.command.js`).run(widgetName, options);
} catch (e) {
    console.error(`Error: ${e.message}`);

    console.log(`Usage: ${argv.$0} [widget-name]`);
    console.log(`       ${argv.$0} address-autocomplete`);
}
