const path = require('path');

module.exports = {
  webpack: (config, options) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('src'),
      'components': path.resolve('src/components'),
      'styles': path.resolve('src/styles')
    }

    return config
  },
}