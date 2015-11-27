'use strict';
var baseConfig = require("./webpack.config.js");
baseConfig.output.pathInfo = true;
baseConfig.debug = true;
baseConfig.cache = true;
baseConfig.devtool=  'eval-cheap-module-source-map';
baseConfig.devServer = {
    contentBase: './tmp',
    historyApiFallback: true
};
module.exports = baseConfig;