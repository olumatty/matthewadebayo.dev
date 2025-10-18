// scripts/rss.ts
import { writeFileSync } from 'fs';
import RSS from 'rss';
import { posts } from '#site/content';
import type { Post } from '#site/content';

async function main() {
  // Use the statically generated posts instead of querying
  const allPosts = posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const feed = new RSS({
    title: 'Matthew Adebayo',
    site_url: 'https://matthewadebayo.dev',
    feed_url: 'https://matthewadebayo.dev/feed.xml',
  });

  allPosts.forEach((post: Post) => {
    feed.item({
      title: post.title,
      url: `https://matthewadebayo.dev/blog/${post.slugAsParams}`,
      date: post.publishedAt,
      description: post.description,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
  console.log('✅ RSS feed generated successfully!');
}

main();
