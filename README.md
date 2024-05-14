# `@netly/eslint-config-base`

> My personal [eslint](https://eslint.org/) config for js and ts at the same time.
> 
What's included:
- typescript-eslint
- @stylistic
- @eslint/js

## Usage

**Install**:

```bash
$ yarn add --dev @netly/eslint-config-base
$ npm i -D @netly/eslint-config-base
```

In `eslint.config.js` file:

```js
import netlyConfig from '@netly/eslint-config-base';

export default [
  ...netlyConfig,
];
```