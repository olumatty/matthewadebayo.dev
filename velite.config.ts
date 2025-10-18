import { defineConfig, defineCollection, s } from 'velite';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      publishedAt: s.string(),
      featured: s.boolean().default(false),
      image: s.string(),
      tags: s.array(s.string()).optional(),
      content: s.raw(), // Raw content for reading time and MDX rendering
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').slice(1).join('/'),
      readingTime: readingTime(data.content || ''),
      tweetUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}`,
      editUrl: `https://github.com/.../edit/main/data/blog/${data.slug}.mdx`,
    })),
});

export default defineConfig({
  root: 'data',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts }, // Only blog posts
  mdx: {
    // Use function-body format to avoid import statements
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'nord',
          keepBackground: false,
        },
      ],
    ],
    outputFormat: 'function-body',
  },
});