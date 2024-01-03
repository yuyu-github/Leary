module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: [
    'react'
  ],
  ignorePatterns: ['node_modules', '*.js'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-labels': ['error', { allowLoop: true, allowSwitch: true }],
    'complexity': ['error', 20],
    'consistent-return': 'error',
    'no-var': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'error',
    'block-scoped-var': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-native-reassign': 'error',
    'no-param-reassign': 'error',
    'no-script-url': 'error',
    'no-useless-concat': 'error',
    'vars-on-top': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-lonely-if': 'error',
    'operator-assignment': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: [
        'src/**/*',
      ],
      env: {
        es2024: true,
      },
    },
    {
      files: [
        'electron/**/*',
        '.eslintrc.js',
      ],
      env: {
        node: true,
      },
    },
  ],
}
