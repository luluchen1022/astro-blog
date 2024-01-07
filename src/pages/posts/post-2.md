---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Astro github pages"
pubDate: "2024-01-05"
description: "This is how to deploy to githubpages."
author: "Lulu chen"
tags: ["astro", "blogging", "github actions", "github pages"]
---

## Configure Astro for GitHub Pages

Set the site and base options in astro.config.mjs.

```
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://${your github username}.github.io',
  base: '/my-repo', // If you are not in github.io repo, you need to add base for your repo name.
})
```

## Configure a GitHub Action

create `.github/workflows/deploy.yml`

```
name: Deploy to GitHub Pages

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:

# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v1
        # with:
          # path: . # The root location of your Astro project inside the repository. (optional)
          # node-version: 18 # The specific version of Node that should be used to build your site. Defaults to 18. (optional)
          # package-manager: pnpm@latest # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## Github repo Setting

On GitHub, go to your repository’s `Settings` tab and find the `Pages` section of the settings.

Choose `GitHub Actions `as the Source of your site.
![Github pages setting](/images/githubPagesSetting.png)