'use strict';

// Possible Errors
// https://github.com/eslint/eslint/tree/master/docs/rules#possible-errors
module.exports = {
    // Empty rules
    'no-empty': 2,
    'no-empty-function': 2,

    // Duplicate rules
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,

    // Debug rules
    'no-console': 0,
    'no-alert': 2,
    'no-debugger': 2,

    // Regex rules
    'no-control-regex': 1,
    'no-regex-spaces': 1,
    'no-div-regex': 2,
    'no-empty-character-class': 2,
    'no-invalid-regexp': 2,

    // Extra Characters
    'no-extra-parens': 1,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'comma-dangle': [1, 'never'],

    // Optimization rule
    'no-inner-declarations': 2,
    'no-constant-condition': 2,
    'no-ex-assign': 2,
    'no-unreachable': 2,

    // JSDoc
    'valid-jsdoc': [2, {
        requireReturn: false,
        requireReturnDescription: false
    }],

    // Other rules
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-obj-calls': 2,
    'no-negated-in-lhs': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-func-assign': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-irregular-whitespace': [2, { skipComments: true }]
};
