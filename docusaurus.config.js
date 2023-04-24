/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "ReScript React Native",
  tagline: "The safest way to build React Native apps",
  url: "https://rescript-react-native.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "favicon.ico",
  organizationName: "rescript-react-native",
  projectName: "rescript-react-native.github.io",
  themeConfig: {
    algolia: {
      appId: "rescript-react-native",
      apiKey: "6e1574674c062e3d14ab7c888da88f4f",
      indexName: "rescript-react-native",
      // contextualSearch: true,
      // searchParameters: {},
    },
    navbar: {
      style: "dark",
      title: "ReScript React Native",
      logo: {
        alt: "ReScript React Native Logo",
        src: "ReScriptReactNative.svg",
      },
      items: [
        {
          label: "Docs",
          to: "docs/",
          activeBasePath: "docs",
          position: "left",
        },
        {
          label: "Components",
          to: "docs/components",
          position: "left",
        },
        {
          label: "APIs",
          to: "docs/apis",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          label: "GitHub",
          href: "https://github.com/rescript-react-native",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "Components",
              to: "docs/components",
            },
            {
              label: "APIs",
              to: "docs/apis",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/rescript-react-native/rescript-react-native/discussions",
            },
            {
              label: "StackOverflow",
              href: "https://stackoverflow.com/questions/tagged/rescript-react-native",
            },
            {
              label: "ReScript Forum",
              href: "https://forum.rescript-lang.org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "ReScript Documentation",
              href: "https://rescript-lang.org",
            },
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/rescript-react-native",
            },
            {
              label: "Wesbite Source",
              href: "https://github.com/rescript-react-native/rescript-react-native.github.io",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ReScript React Native`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editCurrentVersion: false,
          editUrl:
            "https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
