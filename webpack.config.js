// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
const webpack = require('atool-build/lib/webpack');
const px2rem = require('postcss-plugin-px2rem');
const px2remOpts = {
  rootValue: 75,
  unitPrecision: 5,
  propWhiteList: [],
  propBlackList: [],
  selectorBlackList: [],
  ignoreIdentifier: false,
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
};

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd-mobile',
    style: true
  }]);

  webpackConfig.postcss.push(px2rem(px2remOpts));
  return webpackConfig;
};
