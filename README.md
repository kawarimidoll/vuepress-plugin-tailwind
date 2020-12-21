# @kawarimidoll/vuepress-plugin-tailwind

[![GitHub package.json version](https://img.shields.io/github/package-json/v/kawarimidoll/vuepress-plugin-tailwind?logo=github&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/package.json)
[![npm downloads](https://img.shields.io/npm/dt/@kawarimidoll/vuepress-plugin-tailwind?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@kawarimidoll/vuepress-plugin-tailwind)
[![Dependencies](https://img.shields.io/david/kawarimidoll/vuepress-plugin-tailwind?color=blue&logo=dependabot&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/pulls?q=dependabot)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kawarimidoll/vuepress-plugin-tailwind?logo=javascript&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/index.js)
[![Netlify](https://img.shields.io/netlify/c3151153-507a-4a8d-921e-890e9906fcdd?color=blue&logo=netlify&style=for-the-badge)](https://vuepress-plugin-tailwind.netlify.app/)
![Codacy grade](https://img.shields.io/codacy/grade/dedb2c0e04a5448aac17f630343d8733?logo=codacy&style=for-the-badge)
[![LICENSE](https://img.shields.io/github/license/kawarimidoll/vuepress-plugin-tailwind?style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE)

A VuePress plugin to use [`tailwindcss`](https://github.com/tailwindcss/tailwindcss) easily.

With this plugin, you can use any classes defined by Tailwind CSS, and the unused classes are automatically purged (production only).

This plugin is based on [the official guide of Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).

## Usage

1.  Install this plugin :

```sh
yarn add @kawarimidoll/vuepress-plugin-tailwind
```

2.  Add `@tailwind` import statements to the beginning of `.vuepress/styles/index.styl` :

```styl
@tailwind base;
@tailwind components;
@tailwind utilities;

// Add your style definitions below...
```

3.  Load this plugin in `.vuepress/config.js` :

```js
module.exports = {
  plugins: [
    "@kawarimidoll/tailwind",
  ],
};
```

:warning:
_These configuration files are not created automatically. You have to create them if not exist._

## Options

See [docs](https://vuepress-plugin-tailwind.netlify.app).

## Versioning policy

Since v1.0.0, the versioning of this plugin will follow that of Tailwind.

For example, when there is a major version upgrade of Tailwind, this plugin also gets a major upgrade.

## License

[MIT](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE)
