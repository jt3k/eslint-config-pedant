/*eslint no-control-regex: "error"*/
var pattern1 = /\\x1f/; // These characters are rarely used in JavaScript strings so a regular expression
                        // containing these characters is most likely a mistake.

/*eslint no-regex-spaces: "error"*/
var pattern2 = /foo   bar/; // In this regular expression,
                            // it's very hard to tell how many spaces are intended to be matched.

/*eslint no-empty-character-class: "error"*/
var pattern3 = /^abc[]/;  // Empty character classes in regular expressions do not match anything
                          // and can result in code that may not work as intended.

/*eslint no-invalid-regexp: ["error", {"allowConstructorFlags": ["u", "y"]}]*/
var pattern4 = new RegExp('\\');
