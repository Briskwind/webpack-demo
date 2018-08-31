#### 初始化项目

```
加入文件数据加载
加入图片
加入css 打包
html和js基础打包
```



```
# 安装
npm install webpack -g
npm install webpack-cli -g
npm install webpack -D



npm init -y

# 均会写入package.json
npm install --save      #  写入 dependencies
npm install --save-dev  #  写入 devDependencies
```

#### 创建文件结构

```
webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

#### 配置文件

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

#### 加载依赖
```
npm install --save lodash
```

#### npm 运行别名
```
"scripts": {
    "build": "webpack"
  }
```
#### 运行项目

```
npm run build
```
