/*eslint no-caller: "error"*/
function foo(n) {
    if (n <= 0) {
        return;
    }

    // The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible.
    // They have been deprecated in future versions of JavaScript
    // and their use is forbidden in ECMAScript 5 while in strict mode.
    arguments.callee(n - 1);
}

/*eslint no-iterator: "error"*/
Foo.prototype.__iterator__ = function() { // You should use ECMAScript 6 iterators and generators instead.
    return new FooIterator(this);
};

/*eslint no-proto: 2*/
var a = obj.__proto__; // Use `getPrototypeOf` method instead.


/*eslint no-octal-escape: "error"*/
var foo = "Copyright \251"; // It is recommended that Unicode escapes be used instead.

/*eslint no-labels: "error"*/
label:
    while(true) {
        // labels tend to be used only rarely and are frowned upon by some as a remedial form of flow control
        // that is more error prone and harder to understand.
        break label;
    }
