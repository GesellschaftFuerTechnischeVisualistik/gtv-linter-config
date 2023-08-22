// rename this file to '.eslintrc.js' and put it in the project root
module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'es2020': true,
    'jasmine': true
  },
  extends: [
    '@gtvmbh/eslint-config'
  ],
  ignorePatterns: [
    '.eslintrc.js'
  ],
  rules: {
    // add custom per-project rules here
  }
};
