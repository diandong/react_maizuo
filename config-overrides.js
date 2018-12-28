//需要使用 path ,还要支持less, 需要引入对应模块
const path = require('path')
const RewireLess = require('react-app-rewire-less')
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function(config, env){
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config)
  // 修改默认的config.resolve.alias配置,在其基础上添加规则,不是替换,
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '/src')
  }

  //添加 支持 less, RewireLess ()方法 重新赋值config, 再 return 出去
  config = RewireLess(config, env)

  return config
}