const baseTemplate = require('./base.template');

module.exports = Object.assign({
    getFileName: () => ".gitignore",
    template: () => `\
# IDE
.idea
*.img

# NPM
node_modules

`
}, baseTemplate);
