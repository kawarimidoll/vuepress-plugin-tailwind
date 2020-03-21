# @kawarimidoll/vuepress-plugin-tailwind

VuePress plugin to use `tailwindcss` and `postcss-purgecss` easily.

This plugin is a wrapper of [official installation flow of Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-theme-values).

## Usage

1. Install this plugin :

```sh
yarn add @kawarimidoll/vuepress-plugin-tailwind
```

2. Add import statement in `.vuepress/styles/index.styl` with [whitelisting feature](https://purgecss.com/whitelisting.html#in-the-css-directly) :

```styl
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;
```

3. Load the plugin in `.vuepress/config.js` :

```js
module.exports = {
  plugins: [
    "@kawarimidoll/tailwind"
    // with options
    // ["@kawarimidoll/tailwind", { tailwindConfig: { important: true } }]
  ]
};
```

:warning:
_These configuration files are not created automatically. You have to create them if not exist._

## Options

### tailwindConfig

- default: `undefined`

See [Configuration guide of Tailwind CSS](https://tailwindcss.com/docs/configuration/).

### purgecssConfig

- default:

```js
{
  content: [
    `${sourceDir}/**/*.@(js|md|vue|html)`,
    `${vuepressDir}/**/*.@(js|md|vue|html)`,
    `${cwd}/node_modules/**/*vuepress*/!(node_modules)/**/*.@(js|md|vue|html)`
  ],
  defaultExtractor: content => content.match(/[\w-\/:]+(?<!:)/g) || []
}
```

See [Configuration guide of PurgeCSS](https://purgecss.com/configuration.html).

:bulb:
_`sourceDir`, `vuepressDir` and `cwd` above are [Context API](https://vuepress.vuejs.org/plugin/context-api.html) of VuePress._

:warning:
_If you use `purgecssConfig`, the default value is overwritten, not merged._

## Licence

MIT

