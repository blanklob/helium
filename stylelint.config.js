module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern':
      '^[a-z]([a-z0-9-]+)?(_([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$',
  },
}
