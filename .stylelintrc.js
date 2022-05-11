const config = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  rules: {
    // デフォルトのat-rule-no-unknownを使わなくする
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        // tailwindの@がつくものをignoreする
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ]
  },
  ignoreFiles: ['**/node_modules/**']
}

module.exports = config
