const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Deep Channel",
    url: "https://docs.deepchannel.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "deepchannel",
    projectName: "docs",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: (params) => {
              switch (process.env["DC_DOCS_ENV"]) {
                case "production":
                  return undefined;

                case "development":
                case "staging":
                default:
                  return (
                    "https://github.com/DeepChannel/docs/blob/master/docs/" +
                    params.docPath
                  );
              }
            },
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    plugins: [
      [
        "docusaurus-gtm-plugin",
        {
          id: "GTM-MP2MKFN",
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          title: "",
          logo: {
            alt: "DeepChannel",
            srcDark: "img/logo.dark.svg",
            src: "img/logo.light.svg",
          },
          items: [
            {
              href: "https://github.com/deepchannel/docs",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Docs",
            //       to: "/",
            //     },
            //   ],
            // },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //     {
            //       label: "Discord",
            //       href: "https://discordapp.com/invite/docusaurus",
            //     },
            //     {
            //       label: "Twitter",
            //       href: "https://twitter.com/docusaurus",
            //     },
            //   ],
            // },
            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/deepchannel/docs",
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Deep Channel, Inc.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
