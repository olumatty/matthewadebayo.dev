import { posts } from '#site/content';

export function getBlogTags(data = posts) {
  const values = data.flatMap((post) => post.tags || []);
  return Array.from(new Set(values));
}

export const allFeaturedBlogs = posts.filter((post) => post.featured);
