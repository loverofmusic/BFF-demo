const { extend } = require('lodash');

let config = {
  // port: 80
};

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081,
  };
  config = extend(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
  const prodConfig = {
    port: 80,
  };
  config = extend(config, prodConfig);
}

module.exports = config;
