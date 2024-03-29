module.exports = {
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'no-extra-parens': ['warn', 'all', { 'nestedBinaryExpressions': false }],
    'no-setter-return': 'warn',
    'no-template-curly-in-string': 'warn',
    'accessor-pairs': 'error',
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'warn',
    'default-case-last': 'off',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    'eqeqeq': ['error', 'always', {'null': 'ignore'}],
    'grouped-accessor-pairs': 'warn',
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'off',
    'no-extra-bind': 'warn',
    'no-extra-label': 'error',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': [2, {
      'allow': ['!!']
    }],
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'warn',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'off',
    'radix': 'off',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'off',
    'yoda': ['error', 'never', {
      'exceptRange': true
    }],
    'init-declarations': 'off',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-use-before-define': 'warn',
    'array-bracket-newline': ['error', {
      'multiline': true
    }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': 'error',
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'multiline-arguments'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': "off",
    'indent': ["error", 2, { "SwitchCase": 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': ['warn', {
      'max': 400, 'skipComments': true
    }],
    'max-lines-per-function': ['warn', {
      'max': 100
    }],
    'max-nested-callbacks': ['warn', 3],
    'max-params': ['warn', 5],
    'max-statements': 'off',
    'max-statements-per-line': ['error', {
      'max': 1
    }],
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 3
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
      'consistent': true
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': true
    }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': 'off',
    'padding-line-between-statements': ['error', {
      'blankLine': 'always',
      'prev': '*',
      'next': 'return'
    }],
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'off',
    'quote-props': ['warn', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true
    }],
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'off',
    'arrow-body-style': ['error', 'as-needed', {
      'requireReturnForObjectLiteral': false
    }],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': 'error'
  }
}
