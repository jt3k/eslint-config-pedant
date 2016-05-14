/*eslint comma-dangle: ["error", "never"]*/
var obj = {
    bar: 'baz',
    qux: 'quux', // IE8 (when not in IE8 document mode) and below will throw an error when
                 // it encounters trailing commas in JavaScript.
};
