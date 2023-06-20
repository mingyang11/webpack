const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraplugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[hash:6].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    /**
     * 资源文件配置,优先级低于在module中配置的优先级
     * contenthash: 根据文件内容来形成hash
     * ext: 文件拓展名
     */
    // assetModuleFilename: 'images/[contenthash][ext]',
  },
  mode: 'development',
  // mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      /** -----------资源文件配置,优先级低于在module中配置的优先级-------------- */
      {
        test: /\.(png)$/,
        // 设置resource时图片资源会打包成文件，放在指定的文件路径中，可以设置文件路径和文件名
        type: 'asset/resource',
        /**
         * 资源文件配置,优先级高于在output中配置的优先级
         * contenthash: 根据文件内容来形成hash
         * ext: 文件拓展名
         */
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.jpg$/,
        // 设置inline时图片资源会转化成base64码放在js文件中，此时不能设置文件路径和文件名
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.jpeg$/,
        // 通用资源类型，按照默认条件(8k)自动的在resource和inline中选择，否则会被视为resource类型
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 1024 * 10,
          },
        },
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      /** -----------style loader-------------- */
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtraplugin.loader, 'css-loader', 'less-loader'],
      },
      /** -------------字体-------------- */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtraplugin({
      filename: 'css/[contenthash].css',
    }),
  ],
  optimization: {
    minimizer: [
      // 代码压缩
      new CssMinimizerPlugin(),
    ],
  },
};
