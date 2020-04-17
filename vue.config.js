/*
 * @Author: wangteng
 * @Date: 2020-04-16 19:55:52
 * @LastEditTime: 2020-04-16 21:15:24
 * @LastEditors: wangteng
 * @FilePath: /coureseware/vue.config.js
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const pages = require( './page_config.js');

module.exports =  {
  outputDir: 'prod',
  publicPath: './',
  pages: pages,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),  //匹配文件名
        // test: /\.js$|\.html$|.\css/,
        threshold: 10240,  //对超过10k的数据压缩
        minRatio: 0.8,
        deleteOriginalAssets: false  //不删除源文件
      }),
    ]
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        const optionsTemp = options;
        optionsTemp.fix = true;
        return optionsTemp;
      });
  },
  productionSourceMap:false,
}