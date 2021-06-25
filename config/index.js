const borderWidth = require('./borderWidth');
const boxShadow = require('./boxShadow');
const colors = require('./colors');
const fontFamily = require('./fontFamily');
const spacing = require('./spacing');
const translate = require('./translate');
const animation = require('./animation');
const keyframes = require('./keyframes');

module.exports = {
   mode: 'jit',
   purge: [
      './src/**/*.js',
      './src/css/tackle.css',
      './src/css/helpers/*.css',
   ],
   theme: {
      extend: {
         borderWidth,
         boxShadow,
         colors,
         fontFamily,
         spacing,
         translate,
         animation,
         keyframes,
      },
   },
}
