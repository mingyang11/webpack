const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:6].js',
    path: path.resolve(__dirname, 'build'),
  },
};
