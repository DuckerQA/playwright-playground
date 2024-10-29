import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended, {
  languageOptions,
} from 'eslint-plugin-prettier/recommended';
import eslintPluginPlaywright from 'eslint-plugin-playwright';

export default [
  {
    ignores: [
      'package-lock.json',
      'playwright-report/**',
      'test-results/**',
      'allure-report/**',
      'allure-reports/**',
    ],
  },
  { files: ['**/*.{ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
    },
  },
  ...tseslint.configs.recommended,
  {
    // languageOptions: {
    //   parserOptions: {
    //     project: true,
    //     tsconfigRootDir: '.',
    //   },
    // },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      // '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  eslintPluginPlaywright.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
];
