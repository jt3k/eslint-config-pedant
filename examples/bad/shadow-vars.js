/*eslint no-shadow: "error"*/
var a = 3;
function b() {
    var a = 10;
}

/*eslint no-catch-shadow: "error"*/
var err = 'x';

try {
    throw 'problem';
} catch (err) {

}

console.log(err) // err is 'problem', not 'x'

/*eslint no-shadow-restricted-names: 2*/
function NaN() {}
