/*eslint no-extend-native: "error"*/
Object.prototype.extra = 55;

/*eslint no-native-reassign: "error"*/
String = new Object();

/*eslint no-octal: "error"*/
// The leading zero to identify an octal literal has been a source of confusion and error in JavaScript.
var num = 071; // 57

/*eslint no-with: "error"*/
with (foo) {
    // The with statement is potentially problematic because it adds members of an object to the current scope,
    // making it impossible to tell what a variable inside the block actually refers to.
}
