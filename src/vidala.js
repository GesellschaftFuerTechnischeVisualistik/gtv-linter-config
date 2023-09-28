module.exports = {
  rules: {
    'no-restricted-imports': ['error', {
      'patterns': [{
        "group": ['ViDaLa/*'],
        "caseSensitive": true
      }]
    }],
    '@typescript-eslint/unbound-method': 'off',
    'prefer-named-capture-group': 'off',
    '@typescript-eslint/default-param-last': 'warn'
  }
};