/*eslint no-inner-declarations: "error"*/
for (var i = 0; i < 10; ++i) {
    // This feature will be announced 10 times.
    function doSomethingElse () {
        // ...
    }
}

/*eslint no-constant-condition: "error"*/
if (false) {
    // This function is never executed.
    doSomething();
}

/*eslint no-unreachable: "error"*/
function fn() {
    var x = 1;

    return x;
    x = 3; // This will never execute.
}

/*eslint no-empty: "error"*/
if (foo) {} // Empty block statements, while not technically errors, but they can cause confusion when reading code.

/*eslint no-extra-boolean-cast: "error"*/
var truth = new Boolean(true);

if (!!truth) { // This variable already coerced to a Boolean.
    // ...
}
