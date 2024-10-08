const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/app.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devtool: 'inline-source-map',
   devServer: {
    static: './dist',
    },
    mode: 'development',
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
     ],
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Weathr',
      template: './src/index.html',
      favicon: './src/assets/meteor-solid.svg'
    }),
  ],
 };