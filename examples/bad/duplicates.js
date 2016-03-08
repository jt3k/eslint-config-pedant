/*eslint no-dupe-args: "error"*/
function foo(a, b, a) {
    // Outside of strict mode duplicate arguments will mask the value of the first argument.
    console.log('which a is it?', a);
}

/*eslint no-dupe-keys: "error"*/
var foo = {
    bar: 'baz',
    bar: 'qux'  // Duplicate key with other value.
};

/*eslint no-duplicate-case: "error"*/
var one = 1;

switch (one) {
    case 1: break;
    case 1: break; // Duplicate case label.
    default: break;
}
