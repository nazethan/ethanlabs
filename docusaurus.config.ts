import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Labs',
  tagline: 'Welcome to the Labs!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://nazethan.github.io',
  baseUrl: '/',

  organizationName: 'nazethan', // Usually your GitHub org/user name.
  projectName: 'nazethan.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Labs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Records',
          position: 'left',
          type: 'docSidebar',
          sidebarId: 'records_sidebar',
        },
        /**
        {
          label: 'Guides',
          position: 'left',
          type: 'docSidebar',
          sidebarId: 'guides_sidebar',
        },
        */
        {
          href: 'https://github.com/nazethan/labs',
          position: 'right',
          label: 'GitHub',
        },
        {
          href: 'https://discord.gg/FHBc4NeGT5',
          position: 'right',
          label: 'Discord',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `&copy; ${new Date().getFullYear()} All Rights Reserved &bull; Built with <a href="/docs/dev/">&hearts;</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
