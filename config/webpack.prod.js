const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugins = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      // 代码压缩
      new CssMinimizerPlugin(),
      new TerserPlugins(),
    ],
    /** 公共代码抽离方式二 */
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'verndors',
          chunks: 'all',
        },
      },
    },
  },
};
