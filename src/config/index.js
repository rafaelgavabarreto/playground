const _ = require('lodash');
const defaultConfiguration = require('./default');
const environmentConfiguration = require('./' + (process.env.NODE_ENV || 'dev'));

module.exports = _.merge({}, defaultConfiguration, environmentConfiguration);