module.exports = {
  default: {
    import: ['tests/bdd/steps/**/*.cjs'],
    paths: ['tests/bdd/features/**/*.feature'],
    format: ['progress']
  }
};