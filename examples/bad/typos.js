/*eslint no-cond-assign: 2*/
if (user.jobTitle = 'manager') {
    // user.jobTitle is now incorrect
}

/*eslint valid-typeof: 2*/
typeof foo === 'fucntion' // The typo in the 'function' word.

/*eslint no-sparse-arrays: 2*/
var colors = ['red',, 'blue']; // extra comma

/*eslint no-unexpected-multiline: 2*/
var bar = 'bar'
var foo = bar         // This entry is equivalent to `var foo = bar(1 || 2).toString()`.
(1 || 2).toString();

/*eslint no-negated-in-lhs: 2*/
var value = 1;

// We want to do something if there is no match
if (!value in [1, 2, 3]) { // but forgot to bracket condition
    // do something
}
