import { writeFileSync } from 'fs';
import { globby } from 'globby';
import * as prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.tsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`https://matthewadebayodev.com${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();
