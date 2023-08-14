const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: path.resolve(__dirname, '../index.jsx'),
  output: {
    /**
     * @desc 输出的文件名
     * @params [name]: 文件的名称
     *         [contenthash]: 打包后的hash
     *         [ext]: 文件的拓展名
     */
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // 预设polyfill
                '@babel/preset-react',
                {
                  // polyfill 只加载使用的部分
                  useBuiltIns: 'usage',
                  // 使用corejs解析，模块化
                  corejs: '3',
                },
              ],
            ],
            // 使用transform-runtime，避免全局污染，注入helper
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
