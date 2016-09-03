Changelog
=========

v0.8.0 (2016-09-03)
-------------------

### Rules

* Added [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation) rule (@blond [#31]).

[#31]: https://github.com/blond/eslint-config-pedant/pull/31

### Dependencies

* Requires an `eslint` of at least `v3.3.0`.

v0.7.0 (2016-07-08)
-------------------

### Support Node.js

* Drop support for Node.js < 4. (ESLint dropped support in `v3.0.0`).

### Commits

- [[`a7917f2`](https://github.com/blond/eslint-config-pedant/commit/a7917f2)] - chore(travis): run tests in Node.js 6 (@blond)
- [[`7ded85c`](https://github.com/blond/eslint-config-pedant/commit/7ded85c)] - chore(node): drop support for Node.js < 4 (@blond)

v0.6.0 (2016-06-02)
-------------------

### Dependencies

* `eslint` updated to `3.0.0`
* `es6-object-assign` updated to `1.0.2`

### Commits

- [[`306e379`](https://github.com/blond/eslint-config-pedant/commit/306e379)] - Update eslint to ^3.0.0 (@tadatuta)
- [[`be5884c`](https://github.com/blond/eslint-config-pedant/commit/be5884c)] - chore(package): update es6-object-assign to version 1.0.2 (@greenkeeperio-bot)

v0.5.0 (2016-05-15)
-------------------

### ECMAScript 3 & 5

Added shareable configs for `ECMAScript 3` and `ECMAScript 5` ([#16], [#19]).

Read more in [ECMAScript](./README.md#ecmascript) section.

### Rules

Removed [comma-dangle](http://eslint.org/docs/rules/no-unsafe-finally) rule for `es6` and `es5` configs ([#14], [#19]).

### Dependencies

Now `eslint-config-pedant` requires `eslint` version `2.9.0` or more ([#20]).

[#14]: https://github.com/blond/eslint-config-pedant/issues/14
[#16]: https://github.com/blond/eslint-config-pedant/issues/16
[#19]: https://github.com/blond/eslint-config-pedant/pull/19
[#20]: https://github.com/blond/eslint-config-pedant/pull/20

### Commits

- [[`1ec3a8a`](https://github.com/blond/eslint-config-pedant/commit/1ec3a8a61885e5f9b0ea691cf3245793c2921ffd)] -  chore(package): specify eslint as peer dependency (@blond)
- [[`7fc57d2`](https://github.com/blond/eslint-config-pedant/commit/7fc57d2bb26262a6d658c3a9352054c09433e1e6)] -  docs: add section about ECMAScript versions (@blond)
- [[`883ea5b`](https://github.com/blond/eslint-config-pedant/commit/883ea5bb5bdd0b62189770be70980a82cf87b945)] -  docs(example): separate example for es3 (@blond)
- [[`f1e985a`](https://github.com/blond/eslint-config-pedant/commit/f1e985a2846a68730fb8ceeb3d0932fd40f6f27a)] -  feat: add sub configs for es3, es5 and es6 (@blond)
- [[`4a67e81`](https://github.com/blond/eslint-config-pedant/commit/4a67e81408b0b7eba8525354995e236425333a1d)] -  chore(package): update eslint to version 2.10.1 (@greenkeeperio-bot)

v0.4.0 (2016-05-05)
-------------------

### Rules

* Added the [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally) rule.

### Commits

* [[`75f4c00`](https://github.com/blond/eslint-config-pedant/commit/75f4c00867)] - docs: add example for `no-unsafe-finally` rule (@blond)
* [[`e3999c0`](https://github.com/blond/eslint-config-pedant/commit/e3999c0860)] - feat: add `no-unsafe-finally` rule (@blond)
* [[`30e9caa`](https://github.com/blond/eslint-config-pedant/commit/30e9caa767)] - docs: update question about stylistic rules (@blond)
* [[`a70ed61`](https://github.com/blond/eslint-config-pedant/commit/a70ed61d34)] - chore(package): update eslint to version 2.9.0 (@greenkeeperio-bot)
* [[`43b454d`](https://github.com/blond/eslint-config-pedant/commit/43b454df9d)] - chore(package): update eslint to version 2.8.0 (@greenkeeperio-bot)

v0.3.0 (2016-04-12)
-------------------

### Rules

Added ES 2015 rules:

* [constructor-super](http://eslint.org/docs/rules/constructor-super)
* [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)
* [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)
* [no-class-assign](http://eslint.org/docs/rules/no-class-assign)
* [no-const-assign](http://eslint.org/docs/rules/no-const-assign)
* [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)
* [require-yield](http://eslint.org/docs/rules/require-yield)

### Commits

* [[`f802a06`](https://github.com/blond/eslint-config-pedant/commit/f802a06015)] - examples: add examples for es6 rules (blond)
* [[`9baed36`](https://github.com/blond/eslint-config-pedant/commit/9baed3645e)] - rules: add es6 rules (blond)

v0.2.0 (2016-03-08)
-------------------

### Rules

* Add [no-new-require](http://eslint.org/docs/rules/no-new-require) rule.

### Commits

* [[`938f82e`](https://github.com/blond/eslint-config-pedant/commit/938f82e6ca)] - update npm scripts (@blond)
* [[`b8add01`](https://github.com/blond/eslint-config-pedant/commit/b8add01ac5)] - npm: update keywords (@blond)
* [[`9cfe57c`](https://github.com/blond/eslint-config-pedant/commit/9cfe57c502)] - examples: add example for `no-new-requir` rule (@blond)
* [[`8d43a72`](https://github.com/blond/eslint-config-pedant/commit/8d43a722ae)] - rules: add `no-new-require` rule (@blond)
* [[`2cbcb02`](https://github.com/blond/eslint-config-pedant/commit/2cbcb02186)] - examples: remove `no-undefined` rule (@blond)
* [[`904bc94`](https://github.com/blond/eslint-config-pedant/commit/904bc94421)] - examples: fix `comma-dangle` rule (@blond)
* [[`929c79c`](https://github.com/blond/eslint-config-pedant/commit/929c79c5a5)] - docs: fix to no-undefined rule in bad examples (@guria)
* [[`8f27afc`](https://github.com/blond/eslint-config-pedant/commit/8f27afcca0)] - chore(package): update eslint to version 2.7.0 (@greenkeeperio-bot)
* [[`13f4aed`](https://github.com/blond/eslint-config-pedant/commit/13f4aed582)] - chore(package): update eslint to version 2.6.0 (@greenkeeperio-bot)
* [[`1acc399`](https://github.com/blond/eslint-config-pedant/commit/1acc399b7b)] - chore(package): update eslint to version 2.5.3 (@greenkeeperio-bot)
* [[`40c3dbe`](https://github.com/blond/eslint-config-pedant/commit/40c3dbed20)] - docs(install): update install guide (@blond)
