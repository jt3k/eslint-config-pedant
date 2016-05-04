/*eslint no-func-assign: "error"*/
function foo() {}
foo = bar;

/*eslint no-ex-assign: "error"*/
try {
    // code
} catch (e) {
    e = 10; // Overwrite the reference to the error.
}

/*eslint no-unsafe-finally: "error"*/
(() => {
    try {
        return 1;  // 1 is returned but suspended until finally block ends
    } catch(err) {
        return 2;
    } finally {
        return 3;  // 3 is returned before 1, which we did not expect
    }
})(); // We expect this function to return 1, but result is 3.
