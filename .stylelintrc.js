module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-recommended'
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'property-no-vendor-prefix': null
  }
}
