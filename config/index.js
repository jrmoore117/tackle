const borderWidth = require('./borderWidth');
const boxShadow = require('./boxShadow');
const colors = require('./colors');
const fontFamily = require('./fontFamily');
const height = require('./height');
const width = require('./width');
const minWidth = require('./minWidth');
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
         height,
         width,
         minWidth,
         spacing,
         translate,
         animation,
         keyframes,
      },
   },
}
