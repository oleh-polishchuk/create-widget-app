module.exports = (options = {}) => {
    return `\
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Elementor Widget</title>
</head>
<body>

  <style>
    .lb-widget {}
  </style>
  
  <div class="lb-widget" data-selector="lb-widget">
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
    
    function log(...message) { console.log('[lb-widget]', ...message); }
  </script>

</body>
</html>
`
};
