module.exports = (options, ctx) => {
  const name = "@kawarimidoll/vuepress-plugin-tailwind";
  const { tailwindConfig, purgecssConfig } = options;
  const { siteConfig, isProd, sourceDir, vuepressDir, cwd } = ctx;
  const { logger } = require("@vuepress/shared-utils");

  const plugins = [
    require("tailwindcss")(tailwindConfig),
    require("autoprefixer")
  ];
  logger.tip(`[${name}] tailwindcss is enabled`);

  if (isProd) {
    const extensions = "@(js|md|vue|html)";
    plugins.push(
      require("@fullhuman/postcss-purgecss")(
        purgecssConfig || {
          content: [
            `${sourceDir}/**/*.${extensions}`,
            `${vuepressDir}/**/*.${extensions}`,
            `${cwd}/node_modules/**/*vuepress*/!(node_modules)/**/*.${extensions}`
          ],
          defaultExtractor: content => content.match(/[\w-\/:]+(?<!:)/g) || []
        }
      )
    );
    logger.tip(`[${name}] purgecss is enabled`);
  }

  siteConfig.postcss = Object.assign(siteConfig.postcss || {}, { plugins });

  return { name };
};
