module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    'react',
    'jest',
    '@typescript-eslint'
  ],
  env: {
    browser: true,
    'jest/globals': true
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2]
  }
}
