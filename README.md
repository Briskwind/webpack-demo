#### 初始化项目

```
npm init -y
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