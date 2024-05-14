import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default [
  ...typescriptEslint.config(
    { files: ['**/build/**', '**/dist/**', '**/*.js'] },
    ...typescriptEslint.configs.strictTypeChecked,
    ...typescriptEslint.configs.stylisticTypeChecked,
    {
      plugins: {
        '@typescript-eslint': typescriptEslint.plugin,
      },
      languageOptions: {
        parser: typescriptEslint.parser,
        parserOptions: {
          project: true,
        },
      },
    },
    {
      files: ['**/*.js'],
      ...typescriptEslint.configs.disableTypeChecked,
    },
  ),
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
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
