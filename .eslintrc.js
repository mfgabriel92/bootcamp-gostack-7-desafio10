module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'prettier/prettier': 'error',
    'react/prop-types': [2, { ignore: ['children', 'navigation'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-raw-text': 'off',
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'off',
    camelcase: 'off',
  },
}