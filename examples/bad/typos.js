/*eslint no-cond-assign: "error"*/
if (user.jobTitle = 'manager') {
    // user.jobTitle is now incorrect
}

/*eslint valid-typeof: "error"*/
typeof foo === 'fucntion' // The typo in the 'function' word.

/*eslint no-self-compare: "error"*/
if (x === x) {
    x = 20;
}

/*eslint no-sparse-arrays: "error"*/
var colors = ['red',, 'blue']; // extra comma

/*eslint array-callback-return: "error"*/
[1, 2, 3].map(function(value) {
    value + 1; // forget to write `return`
}); // [undefined, undefined, undefined]

/*eslint curly: "error"*/
if (foo) foo++; bar++; // forget to wrap `bar++`

/*eslint no-redeclare: "error"*/
var a = 3;
var a = 10;

/*eslint no-new: "error"*/
new Person();

/*eslint no-return-assign: "error"*/
function doSomething() {
    return foo = bar + 2; // The true intent was to do a comparison (`==` or `===`).
}

/*eslint no-throw-literal: "error"*/
throw "error";

/*eslint no-unexpected-multiline: "error"*/
var bar = 'bar'
var foo = bar         // This entry is equivalent to `var foo = bar(1 || 2).toString()`.
(1 || 2).toString();

/*eslint no-negated-in-lhs: "error"*/
var value = 1;

// We want to do something if there is no match
if (!value in [1, 2, 3]) { // but forgot to bracket condition
    // do something
}

/*eslint no-unsafe-negation: "error"*/
if (!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!obj instanceof Ctor) {
    // operator precedence makes it equivalent to (!obj) instanceof Ctor
    // and it equivalent to always false since boolean values are not objects.
}
