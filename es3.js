'use strict';

const commonRules = require('./lib/common-rules');
const es3Rules = require('./lib/es3-rules');

module.exports = {
    rules: Object.assign({}, commonRules, es3Rules)
};
