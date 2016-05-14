'use strict';

var assign = require('es6-object-assign').assign;

var commonRules = require('./lib/common-rules');
var es3Rules = require('./lib/es3-rules');

module.exports = {
    rules: assign({}, commonRules, es3Rules)
};
