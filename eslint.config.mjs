// ESLint flat config for Astro + TypeScript
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', 'public/**', 'coverage/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: false,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked?.rules,
      ...tseslint.configs.stylisticTypeChecked?.rules,
      // Avoid noisy false positives for escapes in inline script contexts
      'no-useless-escape': 'off',
    },
  },
  // Astro files
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      // Allow escaped quotes in inline scripts/HTML where needed
      'no-useless-escape': 'off',
    },
  },
  // Prettier turns off stylistic rules that conflict with Prettier formatting
  {
    name: 'prettier',
    rules: {
      ...prettier.rules,
    },
  },
];
