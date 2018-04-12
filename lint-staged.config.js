module.exports = {
  '*.ts': [
    'eslint --fix',
    'prettier --write',
    'git add',
    'yarn test --bail --findRelatedTests',
  ],
  '*.js': ['prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  '*.vue': [
    // 'eslint --fix',
    // 'stylelint --fix',
    'prettier --write',
    'git add',
    'yarn test --bail --findRelatedTests',
  ],
  '*.scss': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
};
