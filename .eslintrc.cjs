module.exports = {
  extends: [
    "airbnb-base",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "prettier",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".astro", ".ts", ".tsx", ".js", ".jsx", ".json", ".md"],
      },
    },
  },
};
