module.exports = {
   plugins: [
      require('tailwindcss')({ config: './config/index.js' }),
      require('autoprefixer'),
      require('postcss-nested'),
   ],
}
