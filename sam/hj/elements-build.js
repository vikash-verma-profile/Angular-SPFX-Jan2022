const concat = require('concat');

(async function build() {
  const files = [
    './dist/hj/runtime.js',
    './dist/hj/polyfills.js',
    './dist/hj/scripts.js',
    './dist/hj/main.js'
  ];
  await concat(files, './dist/hj/bundle.js');
})();
