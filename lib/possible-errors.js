'use strict';

// Possible Errors
// https://github.com/eslint/eslint/tree/master/docs/rules#possible-errors
module.exports = {
    // Duplicates
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',

    // Typos
    'valid-typeof': 'error',
    'no-negated-in-lhs': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-cond-assign': ['error', 'except-parens'],

    // Overwrite
    'no-ex-assign': 'error',
    'no-func-assign': 'error',

    // JS Oddities
    'use-isnan': 'error',
    'no-obj-calls': 'error',

    // Debug
    'no-console': 'off',
    'no-debugger': 'error',

    // Regex
    'no-control-regex': 'error',
    'no-regex-spaces': 'error',
    'no-empty-character-class': 'error',
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],

    // Not optimal
    'no-empty': 'error',
    'no-inner-declarations': 'error',
    'no-constant-condition': 'error',
    'no-unreachable': 'error',
    'no-extra-boolean-cast': 'error',

    // Extra Characters
    'comma-dangle': ['warn', 'never'],
    'no-extra-parens': 'warn',
    'no-extra-semi': 'warn',

    // JSDoc
    'valid-jsdoc': ['error', {
        requireReturn: false,
        requireReturnDescription: false
    }],

    // Whitespaces
    'no-irregular-whitespace': ['error', { skipComments: true }]
};
