/*eslint comma-dangle: ["warn", "never"]*/
var obj = {
    bar: 'baz',
    qux: 'quux', // IE8 (when not in IE8 document mode) and below will throw an error when
                 // it encounters trailing commas in JavaScript.
};

/*eslint no-extra-semi: "warn"*/
var x = 5;; // The second semicolon is unnecessary.
