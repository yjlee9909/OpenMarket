module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": 0,
  },
};
