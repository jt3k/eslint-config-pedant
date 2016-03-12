/*eslint no-eval: "error"*/
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

/*eslint no-implied-eval: "error"*/
setTimeout("alert('Hi!');", 100);

/*eslint no-new-func: "error"*/
var x = new Function("a", "b", "return a + b");

/*eslint no-self-assign: "error"*/
foo = foo;

/*eslint no-unused-expressions: ["error", {"allowShortCircuit": true, "allowTernary": true}]*/
n + 1; // This is a valid JavaScript expression,
       // but isn’t actually used.

/*eslint no-inner-declarations: "error"*/
for (var i = 0; i < 10; ++i) {
    // This feature will be announced 10 times.
    function doSomethingElse () {
        // ...
    }
}

/*eslint no-loop-func: "error"*/
for (var i=10; i; i--) {
    var a = function() { return i; };
    a();
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
var truth = true;

if (!!truth) { // This variable already coerced to a Boolean.
    // ...
}
