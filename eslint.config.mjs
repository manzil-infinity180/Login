

export default [
  {
    files: ["**/*.js"],
    languageOptions: {sourceType: "commonjs"}
  },
  {
    ignores: [
        ".config/*",
        "node_modules/**"
    ]
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error'],
      'default-param-last': ['error'],
      'no-var': ['error'],
      'prefer-arrow-callback': ['error'],
      'prefer-const': ['error'],
      'prefer-template': ['error'],
    }
  }
];