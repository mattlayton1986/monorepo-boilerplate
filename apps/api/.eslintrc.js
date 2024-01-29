module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  extends: [
    '@repo/eslint-config/nest.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
};
