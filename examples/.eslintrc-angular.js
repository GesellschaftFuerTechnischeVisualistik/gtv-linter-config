module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'browser': true,
    'node': true,
    'es2020': true,
    'jasmine': true
  },
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  extends: [
    '@gtvmbh/eslint-config/eslint-config-angular'
  ],
  ignorePatterns: [
    '.eslintrc.js'
  ],
  rules: {
    // add custom per-project rules here
  }
};
