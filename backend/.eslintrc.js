module.exports = {
  env: {
    es2020: true, // Updated to ES2020 for more modern features
    node: true, // Node.js environment enabled
  },
  extends: [
    'eslint:recommended', // Recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
  ],
  parser: '@typescript-eslint/parser', // TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Updated to ES2020 for modern syntax support
    sourceType: 'module', // ES modules enabled
  },
  plugins: ['@typescript-eslint'], // TypeScript plugin
};
