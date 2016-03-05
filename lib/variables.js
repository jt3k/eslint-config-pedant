'use strict';

// Variables
// http://eslint.org/docs/rules/#variables
module.exports = {
    'init-declarations': 0,
    'no-delete-var': 0,
    'no-label-var': 0,
    'no-restricted-globals': 0,

    'no-unused-vars': [2, { args: 'after-used' }],
    'no-use-before-define': [2, {
        functions: false,
        classes: false
    }],

    // Shadow rules
    'no-catch-shadow': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,

    // Undef rules
    'no-undef-init': 0,
    'no-undef': 2,
    'no-undefined': 2
};
