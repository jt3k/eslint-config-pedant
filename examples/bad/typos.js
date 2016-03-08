/*eslint no-cond-assign: "error"*/
if (user.jobTitle = 'manager') {
    // user.jobTitle is now incorrect
}

/*eslint valid-typeof: "error"*/
typeof foo === 'fucntion' // The typo in the 'function' word.

/*eslint no-sparse-arrays: "error"*/
var colors = ['red',, 'blue']; // extra comma

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
