const fs = require('fs');
const path = require('path');

module.exports = {
    render: function (widgetDir, options = {})  {
        const filePath = path.resolve(widgetDir, this.getFileName());
        fs.writeFileSync(filePath, this.template(options), { flag: 'wx' });
        console.log(`[create-widget-app] Created ${filePath}`);
    },
};
