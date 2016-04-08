/*eslint no-undef: 2*/
b = 10; // 'b' is not defined

/*eslint no-unused-vars: "error"*/
var x = 10; // "x" is defined but never used

(function(foo, bar, baz) { // "baz" is defined but never used
    return bar;
})();

/*eslint no-use-before-define: "error"*/
console.log(a);
var a = 10;

new A();
class A {
}
