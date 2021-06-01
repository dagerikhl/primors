// TODO Fix Warning: React version not specified in eslint-plugin-react settings.
//  See https://github.com/yannickcr/eslint-plugin-react#configuration
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  ignorePatterns: ["*.js", "lib/**/*"],
  rules: {
    "react/prop-types": "off",
    // TODO Update TS and fix React JSX transform
    // "react/react-in-jsx-scope": "off",
  },
};
