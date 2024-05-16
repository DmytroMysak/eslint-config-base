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
