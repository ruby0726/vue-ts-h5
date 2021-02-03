const { merge } = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            // 之所以设为37.5，是为了引用像vant、mint-ui这样的第三方UI框架，因为第三方框架没有兼容rem，用的是px单位，将rootValue的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原vant、mint-ui的组件
            rootValue: 37.5,
            propList: ['*'],
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          happyPackMode: true,
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                // 这句必须加上，不然修改主题没有效果
                style: name => `${name}/style/less`
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  }
}