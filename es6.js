'use strict';

const commonRules = require('./lib/common-rules');
const es6Rules = require('./lib/es6-rules');

module.exports = {
    rules: Object.assign({}, commonRules, es6Rules)
};
