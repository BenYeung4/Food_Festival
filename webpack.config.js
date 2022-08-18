//path module
const path = require("path");
//after plugins are added, add regular webpack
const webpack = require("webpack");

//after npm install -D webpack-bundle-analyzer
//helps analyze bundle siezes to see how much JavaScript is being procesed by the browser
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// after npm install -D webpack-pwa-manifest
const WebpackPwaManifest = require("webpack-pwa-manifest");

//create main config object
// module.exports = {
//updated to config
const config = {
  //for basic config under webpack, will alwasy need 3 properties: entry, output, and mode
  //entry property is the root of the bundle and the beginning of he dependcy graph
  //"./assets/js/script.js",

  entry:
    //after entry has been provided, it will bundle the code and output the bundled code to a folder that we specify. it is best to put it in the folder called 'dist'/short for distribution
    //with the new updated splits in js from script.js to events, helper, schedule, tickets, domMethods, it should look like the following
    {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js",
    },
  output: {
    //original file
    // filename: "main.bundle.js",
    //original
    // path: path.resolve(__dirname, "dist"),
    //example provided the following
    //path: path.join(__dirname + "/dist"),

    //updated file name: need [] for each of the individual splits we did in js
    filename: "[name].bundle.js",
    //updated path
    path: path.join(__dirname + "/dist"),
  },
  //this is added after npm install -D file-loader, this is for the photos
  module: {
    //will identify the type of files to pre-process using the test property to find a regular expression, or regex.
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          //after adding the image-webpack-loader
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  //after npm i jquery, add the plugins [], to tell which plugin we want to use,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      //jQuery javascript shortcuts to html, that someone else wrote so we dont need to write it
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder called, "report.html", we can set this value to disable to temporarily stop the reporting and automatic opening of this report in the browser
    }),

    //after webpack-pwa-manifest
    new WebpackPwaManifest({
      name: "Food Event",
      short_name: "Foodies",
      description: "An app that allows you to view upcoming food events.",
      start_url: "../index.html",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve("assets/img/icons/icon-512x512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
  //finally provide the mode which we want webpack to run, in default it run in production mode but in this case we want it in 'development' mode
  mode: "development",
};

//starting this run the following in the terminal, npm run build
module.exports = config;
