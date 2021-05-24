module.exports = {
    extends: ['eslint:recommended', 'airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    rules: {
      'linebreak-style': 'off',
      'max-len': 'off',
      'react/forbid-prop-types': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
  };
  