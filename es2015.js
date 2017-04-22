'use strict';

const commonRules = require('./lib/common-rules');
const es2015Rules = require('./lib/es2015-rules');

module.exports = {
    rules: Object.assign({}, commonRules, es2015Rules)
};
