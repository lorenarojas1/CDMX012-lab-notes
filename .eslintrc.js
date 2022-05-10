module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'np-shadow': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'react/prop-types': 'off',
  },
};
