//path module
const path = require("path");
//after plugins are added, add regular webpack
const webpack = require("webpack");

//create main config object
module.exports = {
  //for basic config under webpack, will alwasy need 3 properties: entry, output, and mode
  //entry property is the root of the bundle and the beginning of he dependcy graph
  entry: "./assets/js/script.js",
  //after entry has been provided, it will bundle the code and output the bundled code to a folder that we specify. it is best to put it in the folder called 'dist'/short for distribution
  output: {
    //original
    // path: path.resolve(__dirname, "dist"),
    //example provided the following
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js",
  },
  //after npm i jquery, add the plugins [], to tell which plugin we want to use,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  //finally provide the mode which we want webpack to run, in default it run in production mode but in this case we want it in 'development' mode
  mode: "development",
};
