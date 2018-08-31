  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
   module.exports = {
   entry: {
     app: './src/index.js',
     print: './src/print.js'
   },
// 重新生成index.html 自己加载相关js
   plugins: [
     // 构建前清理dist 文件夹
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],


   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath: '/'
    }
  };
