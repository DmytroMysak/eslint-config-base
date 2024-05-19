import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default [
  ...typescriptEslint.config(
    js.configs.recommended,
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
      rules: {
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true, ignoreVoidOperator: false },
        ],
      },
    },
    {
      files: ['**/*.js'],
      ...typescriptEslint.configs.disableTypeChecked,
    },
  ),
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
