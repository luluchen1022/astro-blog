---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Astro with Tailwind"
pubDate: "2024-01-05"
description: "This is how to Setup tailwind in astro."
author: "Lulu chen"
tags: ["astro", "blogging", "Tailwind", "css"]
---

## Install tailwind
```
yarn add @astrojs/tailwind tailwindcss
```
## Tailwind Config  

- astro.config.mjs

```
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...
  integrations: [tailwind()],
});
```

- tailwind.config.mjs

```
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}

```

## Apply tailwind styles

- put tailwind directive to your global css

```
/* The integration's default injected base.css file */
@tailwind base;
@tailwind components;
@tailwind utilities;
```