'use strict';

// Variables
// http://eslint.org/docs/rules/#variables
module.exports = {
    'init-declarations': 'off',
    'no-delete-var': 'off',
    'no-label-var': 'off',
    'no-restricted-globals': 'off',

    // Unused & undeclared variables
    'no-undef-init': 'off',
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
