module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")({ config: "./config/index.js" }),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};
