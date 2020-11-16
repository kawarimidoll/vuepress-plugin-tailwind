const { name, description, repository } = require("../../package");
const repo = repository.url.replace(/.+\.[^/]+\/([^.]+).*/, "$1");

module.exports = {
  title: name,
  description,
  themeConfig: {
    repo,
    docsDir: "docs",
    lastUpdated: true,
    search: false,
    nav: [
      { text: "Top", link: "/" },
      { text: "Demo", link: "/demo/" },
      {
        text: "Resources",
        items: [
          {
            text: "Old versions",
            items: [{ text: "v0.x", link: "/guides/v0/" }],
          },
          {
            text: "Official guides",
            items: [
              { text: "tailwind", link: "https://tailwindcss.com" },
              { text: "vuepress", link: "https://vuepress.com" },
            ],
          },
        ],
      },
    ],
    sidebar: "auto",
  },
  plugins: [[require("../../index"), { corePlugins: { preflight: false } }]],
};
