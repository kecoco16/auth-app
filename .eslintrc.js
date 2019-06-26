module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'flowtype', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'flowtype/require-parameter-type': 2,
    'flowtype/no-types-missing-file-annotation': 0,
    'no-async-promise-executor': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
