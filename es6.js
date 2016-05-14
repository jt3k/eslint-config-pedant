'use strict';

var assign = require('es6-object-assign').assign;

var commonRules = require('./lib/common-rules');
var es6Rules = require('./lib/es6-rules');

module.exports = {
    rules: assign({}, commonRules, es6Rules)
};
