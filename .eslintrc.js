module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    //セミコロンがないと警告
    'no-extra-semi': 'warn',
    //シングルクオートを使っていないと警告
    quotes: ['warn', 'single'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
}
