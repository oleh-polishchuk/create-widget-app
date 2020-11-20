const baseTemplate = require('./base.template');

module.exports = Object.assign({
    getFileName: () => "screenshot.png",
    template: () => `\
`
}, baseTemplate);
