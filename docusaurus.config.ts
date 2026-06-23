import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const remarkWikiLink = require('remark-wiki-link'); // 1. Importe o plugin no topo

const config: Config = {
  title: 'The Eye of Sauron',
  tagline: 'Security Operations & Home Lab Documentation',
  favicon: 'img/eyesauron.png',

  future: {
    v4: true,
  },

  // Ajuste para o seu cenário de deploy (Exemplo com GitHub Pages)
  url: 'https://PedroValdevite.github.io',
  baseUrl: '/the-eye-of-sauron/', 

  organizationName: 'PedroValdevite',
  projectName: 'the-eye-of-sauron', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR', // Alterado para o seu idioma padrão de escrita
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
	  sidebarPath: './sidebars.ts',
	  remarkPlugins: [
            [
              remarkWikiLink, 
              { 
                // Mantém o texto exatamente como você digitou (preservando maiúsculas/minúsculas)
                pageResolver: (name) => [name],
                
                // Converte os espaços e caracteres para o padrão seguro de URL (%20)
                hrefTemplate: (permalink) => {
                  // encodeURI substitui os espaços por %20 mas mantém as barras '/' intactas
                  let safePath = encodeURI(permalink);
                  
                  // Garante que a URL comece sempre a partir da raiz do site
                  return safePath.startsWith('/') ? safePath : `/${safePath}`;
                }
              }
            ]
          ],
	},
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/eyesauron.png',
    colorMode: {
      defaultMode: 'dark', // Inicializa diretamente no modo escuro
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The Eye of Sauron',
      logo: {
        alt: 'TEOS Logo',
        src: 'img/eyesauron.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Você pode renomear este ID em sidebars.ts depois para 'labSidebar'
          position: 'left',
          label: 'Laboratório',
        },
              {
          href: 'https://github.com/seu-usuario/the-eye-of-sauron',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão Geral do Lab',
              to: '/docs/index.md',
            },
          ],
        },
        {
          title: 'Contato / Links',
          items: [
            {
              label: 'GitHub Project',
              href: 'https://github.com/PedroValdevite/the-eye-of-sauron',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Eye of Sauron. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // Essencial para destacar logs, docker-compose e comandos Linux corretamente:
      additionalLanguages: ['bash', 'yaml', 'json', 'xml-doc'], 
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
