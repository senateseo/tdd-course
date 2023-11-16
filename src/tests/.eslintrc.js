  module.exports = { 
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
      react: {
        version:'16.4.2'
      }
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
  };