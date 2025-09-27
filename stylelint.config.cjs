module.exports = {
  rules: {},
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  // Allow Tailwind at-rules so editor stylelint doesn't complain when PostCSS isn't active
  overrides: [
    {
      files: ['**/*.css'],
      customSyntax: 'postcss-safe-parser',
      rules: {
        'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'screen'] }]
      }
    }
  ]
};
