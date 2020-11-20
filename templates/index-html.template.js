const baseTemplate = require('./base.template');

module.exports = Object.assign({
    getFileName: () => "index.html",
    template: ({ className }) => `\
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Elementor Widget</title>
</head>
<body>

  <style>
    .${className} {}
  </style>
  
  <div class="${className}" data-selector="${className}">
    Widget works!
  </div>

  <script>
    init();

    ////

    function init() {
      log('Start initialization...')
      main();
    }

    function main() {
      log('Initialization success!')
      handlerA();
    }
    
    function handlerA() {
         // your code here...
    }
    
    function log(...message) { console.log('[${className}]', ...message); }
  </script>

</body>
</html>
`
}, baseTemplate);
