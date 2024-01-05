---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Astro setup"
pubDate: 2024-01-05
description: "This is how to use prettier,eslint, and vscode editor setup an astro repo."
author: "Lulu chen"
tags: ["astro", "blogging", "learning in public"]
---

## Install Astro

### create a new project with yarn

```
// basic
yarn create astro

// use template
yarn create astro --template <example-name>
```

> [template](https://github.com/withastro/astro/tree/main/examples) reference

### Start astro

```
yarn dev
```

## VScode extension

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) extesion can provides language support for `.astro` files.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension and add the following settings to your VS Code configuration:

```
// setting.json

{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension and add the following settings to your VS Code configuration:

```
// setting.json
{
  "eslint.validate": ["javascript", "javascriptreact", "astro", "typescript", "typescriptreact"]
}
```

## Prettier

Install prettier to format code

```
yarn add --save-dev prettier prettier-plugin-astro
```

Setting prettier config

```
// .prettierrc.mjs

/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

```

## Eslint

Install eslint to check code

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-import-resolver-alias
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- @typescript-eslint/parser

```
yarn add -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/parser
```

Setting `elsintrc.cjs`

```
module.exports = {
  extends: [
    "airbnb-base",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
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
```
