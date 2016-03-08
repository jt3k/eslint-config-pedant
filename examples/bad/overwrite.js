/*eslint no-func-assign: 2*/
function foo() {}
foo = bar;

/*eslint no-ex-assign: 2*/
try {
    // code
} catch (e) {
    e = 10; // Overwrite the reference to the error.
}
