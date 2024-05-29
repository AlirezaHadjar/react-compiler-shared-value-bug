module.exports = {
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "eslint-plugin-react-compiler",
    "@typescript-eslint",
    "react",
  ],
  rules: {
    // Temporary until https://github.com/facebook/react-native/pull/43756 gets into a release.
    "prettier/prettier": 0,
    "prettier/prettier": "error",
    "react-compiler/react-compiler": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
