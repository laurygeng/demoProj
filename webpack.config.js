const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

const config ={
  entry:"./src/index.tsx",
  output:{
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  devtool:"source-map",
  resolve:{
    extensions:[".ts",".tsx",".js",".json"],
    alias: {
      '@components': path.resolve(__dirname,'src/components'),
    }
  },
  module:{
    rules:[{
      test:/\.tsx?$/,loader:"awesome-typescript-loader"
    },
    {enforce:"pre",test:/\.js$/,loader:"source-map-loader"}
  ]
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};