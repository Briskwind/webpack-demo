// 线上环境配置

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
     mode: 'production',
 });
