const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const devConf = require('./webpack.dev');
const prodConf = require('./webpack.prod');

module.exports = (env) => {
  if (env.production) {
    return merge(commonConf, prodConf);
  }
  return merge(commonConf, devConf);
};
