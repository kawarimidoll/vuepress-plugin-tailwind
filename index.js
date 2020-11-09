module.exports = (options = {}, ctx) => {
  const { name } = require("./package");
  const { cwd, siteConfig, sourceDir, vuepressDir } = ctx;
  const { tailwindConfig, ...others } = options;
  const { logger } = require("@vuepress/shared-utils");

  const defaultTailwindConfig = () => {
    try {
      return require(`${cwd}/tailwind.config.js`);
    } catch (e) {
      const purge = {
        content: [sourceDir, vuepressDir].map(
          (dir) => `${dir}/**/*.@(js|ts|md|vue|html)`
        ),
      };
      return Object.assign({ purge }, others);
    }
  };

  const plugins = [
    require("tailwindcss")(tailwindConfig || defaultTailwindConfig()),
    require("autoprefixer"),
  ];
  siteConfig.postcss = Object.assign(siteConfig.postcss || {}, { plugins });

  logger.tip(`[${name}] tailwindcss is enabled`);
  return { name };
};
