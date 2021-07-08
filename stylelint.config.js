module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern':
      '-^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
}
