import pluginJs from '@eslint/js';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
      'no-undef': 'off',
    },
  },
  ...tseslint.configs.recommended,
  eslintPluginPlaywright.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
];
