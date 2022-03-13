module.exports = {
  extends: 'airbnb-typescript-prettier',
  rules: {
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-fallthrough': 0,
    'eol-last': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
