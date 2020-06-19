module.exports = {
  title: 'UI service for DevOps',
  tagline: 'Build modern Web Apps quickly in the language you already know.',
  url: 'https://pglet.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pglet', // Usually your GitHub org/user name.
  projectName: 'pglet.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'pglet',
      logo: {
        alt: 'pglet Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pglet/pglet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pglet',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/rWjf7xx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pgletio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pglet/pglet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Appveyor Systems Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pglet/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pglet/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
