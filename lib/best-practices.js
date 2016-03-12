'use strict';

// Best Practices
// http://eslint.org/docs/rules/#best-practices
module.exports = {
    // Danger
    'no-extend-native': 'error',
    'no-native-reassign': 'error',
    'no-octal': 'error',
    'no-with': 'error',

    // Outdated
    'no-caller': 'error',
    'no-iterator': 'error',
    'no-proto': 'error',
    'no-octal-escape': 'error',
    'no-labels': 'error',
    'no-unused-labels': 'error',

    // Shadow vars
    'no-case-declarations': 'error',
    'no-empty-pattern': 'error',

    // Typos
    'no-self-compare': 'error',
    'array-callback-return': 'error',
    'curly': 'error',
    'no-new': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-redeclare': 'error',

    // Not Optimal
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-self-assign': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-loop-func': 'error',
    'no-new-func': 'error'
};
