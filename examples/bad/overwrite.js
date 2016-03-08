/*eslint no-func-assign: "error"*/
function foo() {}
foo = bar;

/*eslint no-ex-assign: "error"*/
try {
    // code
} catch (e) {
    e = 10; // Overwrite the reference to the error.
}
