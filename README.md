eslint-config-pedant
====================

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]

[npm]:          https://www.npmjs.org/package/eslint-config-pedant
[npm-img]:      https://img.shields.io/npm/v/eslint-config-pedant.svg

[travis]:       https://travis-ci.org/blond/eslint-config-pedant
[test-img]:     https://img.shields.io/travis/blond/eslint-config-pedant.svg?label=tests

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) to find errors, typos and potentially dangerous code.

![pedant](https://cloud.githubusercontent.com/assets/2225579/13544540/31939a3a-e288-11e5-8fd2-f6a86190e037.jpg)

Install
-------

You'll first need to install `ESLint`:

```
$ npm install eslint --save-dev
```

**Note**: You may install ESLint globally using the `-g` flag.

Next, install `eslint-config-pedant`:

```
$ npm install eslint-config-pedant --save-dev
```

Usage
-----

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Add this to your `.eslintrc` file:

```json
{
  "extends": "pedant"
}
```

**Note**: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
