module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    'node_modules',
    '*.config.*.js',
    '*.config.js',
    'assets',
    '.eslintrc.js',
  ],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
}
