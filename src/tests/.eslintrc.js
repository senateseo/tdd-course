module.exports = { 
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
};
