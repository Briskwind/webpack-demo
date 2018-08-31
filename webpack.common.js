// 线上测试 共有的配置
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   entry: {
     // 生成多少js文件
     app: './src/index.js',
     print: './src/print.js'
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.[hash].js',
     path: path.resolve(__dirname, 'dist')
   }
 };
