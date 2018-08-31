// 开发环境配置
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'development',
   // 错误追踪   
   devtool: 'inline-source-map',

   devServer: {
     contentBase: './dist'
   }
});
