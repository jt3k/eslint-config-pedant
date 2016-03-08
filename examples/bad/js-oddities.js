/*eslint use-isnan: "error"*/
if (foo == NaN) { // NaN has the unique property of not being equal to anything, including itself.
    // ...
}

/*eslint no-obj-calls: "error"*/
var json = new JSON(); // JSON look as if it could be constructors due their capitalization,
                       // but actually this is namespace.
