module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['dist', 'node_modules', '*.config.js'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
}
