'use strict';

// Variables
// http://eslint.org/docs/rules/#variables
module.exports = {
    // Unused & undeclared variables
    'no-unused-vars': ['error', { args: 'after-used' }],
    'no-undef': 'error',
    'no-use-before-define': ['error', {
        functions: false,
        classes: true
    }],
    'no-undefined': 'error',

    // Shadow variables
    'no-catch-shadow': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error'
};
