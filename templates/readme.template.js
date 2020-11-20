const baseTemplate = require('./base.template');

module.exports = Object.assign({
    getFileName: () => "README.md",
    template: ({ className }) => `\
# ${className}

![screenshot](screenshot.png "screenshot")

`
}, baseTemplate);
