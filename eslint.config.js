import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  globalIgnores(['dist/**', '.next/**']),
  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [js.configs.recommended],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    extends: [reactHooks.configs.flat.recommended],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['*.config.{js,mjs}', 'src/db/**/*.js', 'src/app/api/**/*.js', 'src/lib/auth.js'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: { globals: globals.node },
  },
]);
