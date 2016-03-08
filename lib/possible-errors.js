'use strict';

// Possible Errors
// https://github.com/eslint/eslint/tree/master/docs/rules#possible-errors
module.exports = {
    // Duplicates
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,

    // Typos
    'valid-typeof': 2,
    'no-negated-in-lhs': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-cond-assign': [2, 'except-parens'],

    // Overwrite
    'no-ex-assign': 2,
    'no-func-assign': 2,

    // JS Oddities
    'use-isnan': 2,
    'no-obj-calls': 2,

    // Debug
    'no-console': 0,
    'no-debugger': 2,

    // Regex
    'no-control-regex': 2,
    'no-regex-spaces': 2,
    'no-empty-character-class': 2,
    'no-invalid-regexp': [2, { allowConstructorFlags: ['u', 'y'] }],

    // Not optimal
    'no-empty': 2,
    'no-inner-declarations': 2,
    'no-constant-condition': 2,
    'no-unreachable': 2,
    'no-extra-boolean-cast': 2,

    // Extra Characters
    'comma-dangle': [1, 'never'],
    'no-extra-parens': 1,
    'no-extra-semi': 2,

    // JSDoc
    'valid-jsdoc': [2, {
        requireReturn: false,
        requireReturnDescription: false
    }],

    // Whitespaces
    'no-irregular-whitespace': [2, { skipComments: true }]
};
