## 1> 使用脚手架安装(create-react-app 项目名称),后需要重新配置一些文件
  1/ 删除src文件,自己重新配置
  2/ 通过 react-app-rewired 这个第三方包 新建config-overrides.js 文件,来自定义一些配置
  ### 配置内容
  ```
  //需要使用 path ,还要支持less, 需要引入对应模块
  const path = require('path')
  const RewireLess = require('react-app-rewire-less')

  module.exports = function(config, env){
    // 修改默认的config.resolve.alias配置,在其基础上添加规则,不是替换,
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '/src')
    }

    //添加 支持 less, RewireLess ()方法 重新赋值config, 再 return 出去
    config = RewireLess(config, env)

    return config
  }
  ```

  3/ 改变 package.json 初始的 npm start, build, test里面的脚本命令 (eject可以根据需要来使用,不用可以删除这个脚本命令)
  ```
    start: "react-scrtpts start" 改为 start: "react-app-rewired start"
    其他 build, test 命令类似(react-app-rewired 由这个包支持)
  ```

---
## 2> 项目开始需要安装的 npm 包 {生产环境使用的包, 后缀 -S,使用 [ create-react-app 项目名称 ] 脚手架会默认安装一些包}
```
  react
  react-dom
  react-router-dom
  "react-scripts": "2.1.2" (这个新版本,有问题,暂时使用@2.1.1版本)
```
---
## 3> 使用less 需要安装 npm 第三方包 (开发环境使用的包, 后缀 -D)
```
  less
  react-app-rewired
  react-app-rewire-less
  less-loader
```
---
## 4> 桌面应用开发(混合开发) Electron
---
## 5> 使用 Ant Design Mobile需要安装的包
```
  npm install antd-mobile --save
  npm install babel-plugin-import -D
  npm react-app-rewired -D
```
  然后在config-overrides.js里面配置文件,加入带加号内容
  引入 react-app-rewired 模块,按需引入{ injectBabelPlugin }
```
  + const { injectBabelPlugin } = require('react-app-rewired');
    module.exports = function override(config, env) {
  +   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
      return config;
    };
```