'use strict';

// Variables
// http://eslint.org/docs/rules/#variables
module.exports = {
    'init-declarations': 'off',
    'no-delete-var': 'off',
    'no-label-var': 'off',
    'no-restricted-globals': 'off',

    'no-unused-vars': ['error', { args: 'after-used' }],
    'no-use-before-define': ['error', {
        functions: false,
        classes: true
    }],

    // Shadow rules
    'no-catch-shadow': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',

    // Undef rules
    'no-undef-init': 'off',
    'no-undef': 'error',
    'no-undefined': 'error'
};
