'use strict';

const errors    = require('./lib/possible-errors');
const practices = require('./lib/best-practices');
const variables = require('./lib/variables');

module.exports = {
    rules: Object.assign(errors, practices, variables)
};
