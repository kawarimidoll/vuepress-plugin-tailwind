# @kawarimidoll/vuepress-plugin-tailwind

A VuePress plugin to use [`tailwindcss`](https://github.com/tailwindcss/tailwindcss) easily.

With this plugin, you can use any classes defined by Tailwind CSS, and the unused classes are automatically purged (production only).

This plugin is based on [the official guide of Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).

## Usage

1. Install this plugin :

```sh
yarn add @kawarimidoll/vuepress-plugin-tailwind
```

2. Add `@tailwind` import statements to the beginning of `.vuepress/styles/index.styl` :

```styl
@tailwind base;
@tailwind components;
@tailwind utilities;

// Add your style definitions below...
```

3. Load this plugin in `.vuepress/config.js` :

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

If you want to use the options, refer to [the Tailwind CSS configuration guide](https://tailwindcss.com/docs/configuration/).

### tailwindConfig

This is the configuration object or path to the configuration file. Use like this :

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ["@kawarimidoll/tailwind", { tailwindConfig: "style/config.js" }],
  ],
};
```

The default value is :

```js
{
  purge: {
    content: [
      `${sourceDir}/**/*.@(js|ts|md|vue|html)`,
      `${vuepressDir}/**/*.@(js|ts|md|vue|html)`,
    ],
  },
}
```

This default value is adjusted for VuePress from [the document](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused styles of Tailwind.

The priorities of configuration is:

1. If there is input `tailwindConfig`, the value is used.
2. If there is `tailwind.config.js` in the same directory as `package.json`, the file is used.
3. The default value above is used.

:bulb:
_`sourceDir` and `vuepressDir` above are [Context API](https://vuepress.vuejs.org/plugin/context-api.html) of VuePress._

:warning:
_If you use `tailwindConfig`, the default value is overwritten, not merged._

### Any other key

If you use any other key, the option object is merged to the default value of `tailwindConfig`.

For example, when you use `corePlugins` and `important` like this:

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "@kawarimidoll/tailwind",
      { corePlugins: { preflight: false }, important: true },
    ],
  ],
};
```

Then, the configuration object is:

```js
{
  corePlugins: { preflight: false },
  important: true,
  purge: {
    content: [
      `${sourceDir}/**/*.@(js|md|vue|html)`,
      `${vuepressDir}/**/*.@(js|md|vue|html)`,
    ],
  },
};
```

To build this document, `{ corePlugins: { preflight: false } }` is used to enable default style of VuePress.

:bulb:
_If you use `tailwindConfig`, the other keys are ignored because of the priority._

:warning:
_If you use `purge` key, the default value is overwritten, not merged. It is because this plugin uses [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to merge objects._

## Versioning policy

Since v1.0.0, the versioning of this plugin will follow that of Tailwind.

For example, when there is a major version upgrade of Tailwind, this plugin also gets a major upgrade.

## License

[MIT](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE)
