import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    arrowParens: true,
    blockSpacing: true,
    jsx: false,
  }),
  {
    rules: {
      'max-len': ['error', { code: 120 }],
    },
  },
];
