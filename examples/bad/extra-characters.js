/*eslint comma-dangle: [1, 'never']*/
var obj = {
    bar: 'baz',
    qux: 'quux', // IE8 (when not in IE8 document mode) and below will throw an error when
                 // it encounters trailing commas in JavaScript.
};

/*eslint no-extra-semi: 2*/
var x = 5;; // The second semicolon is unnecessary.

/*eslint no-extra-parens: 1*/
var f = (function () { return 1; }); // It is not necessary to wrap the function.
