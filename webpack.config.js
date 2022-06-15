const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// let mode = 'development';
// if(process.env.NODE_ENV === 'production'){
//   mode = 'production';
// }

module.exports = {
  mode: 'development',
  entry: { 
    search: "./src/search.js", 
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { 
        test: /\.(scss|css)$/, 
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"], 
      },
      {
        test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      // hash: true, 
      filename: "index.html", 
      template: path.resolve(__dirname, "index.html"), 
      chunks: ["search"], 
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: './img' },
      ],
    }),
  ]
};