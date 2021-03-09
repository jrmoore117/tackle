const borderWidth = require('./borderWidth');
const boxShadow = require('./boxShadow');
const colors = require('./colors');
const fontFamily = require('./fontFamily');
const height = require('./height');
const width = require('./width');
const minWidth = require('./minWidth');
const translate = require('./translate');
const animation = require('./animation');
const keyframes = require('./keyframes');


module.exports = {
   theme: {
      extend: {
         borderWidth,
         boxShadow,
         colors,
         fontFamily,
         height,
         width,
         minWidth,
         translate,
         animation,
         keyframes,
      },
   },
   variants: {
      backgroundColor: ['active', 'hover'],
      borderColor: ['responsive', 'hover', 'focus'],
      borderWidth: ['responsive', 'focus'],
      animation: ['responsive', 'focus', 'active'],
      textColor: ['hover'],
   },
}
