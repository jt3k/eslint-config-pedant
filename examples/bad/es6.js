/*eslint constructor-super: "error"*/
class A extends B {
    constructor() {
        // Constructors of derived classes must call super().
    }
}

/*eslint no-this-before-super: "error"*/
class A extends B {
    constructor() {
        this.a = 0; // In the constructor of derived classes,
                    // if this are used before super() calls, it raises a reference error.
        super();
    }
}

/*eslint no-dupe-class-members: "error"*/
class Foo {
    bar() { }
    bar() { } // Duplicate names in class members.
}

/*eslint no-class-assign: "error"*/
class C { } // Creates the `A` variable.
C = 0;      // Modify the `A` variable. But the modification is a mistake in most cases.

/*eslint no-const-assign: "error"*/
const a = 0;
a += 1; // We cannot modify variables that are declared using const keyword.
        // It will raise a runtime error.

/*eslint no-new-symbol: "error"*/
var foo = new Symbol('foo'); // The Symbol constructor is not intended to be used with the new operator,
                             // but to be called as a function.

/*eslint require-yield: "error"*/
function* foo() {
    return 10; // This generator functions that do not have the `yield` keyword.
}
