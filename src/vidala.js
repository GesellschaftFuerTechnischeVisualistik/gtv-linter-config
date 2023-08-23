module.exports = {
  rules: {
    'no-restricted-imports': ['error', { 'patterns': ['ViDaLa/*'], 'caseSensitive': true }],
    '@typescript-eslint/unbound-method': 'off',
    'prefer-named-capture-group': 'off',
  }
};