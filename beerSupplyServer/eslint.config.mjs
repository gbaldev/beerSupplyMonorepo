
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      'no-console': 'off',
      'indent': ['error', 2],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];