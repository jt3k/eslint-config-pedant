'use strict';

const errors = require('./lib/possible-errors');
const variables = require('./lib/variables');

module.exports = {
    rules: Object.assign(errors, variables)
};
