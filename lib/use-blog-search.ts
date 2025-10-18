'use client';
import { useMemo, useState, useEffect } from 'react';
import { posts } from '#site/content';
import type { Post } from '#site/content';
import { getBlogTags } from './velite-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useBlogSearch() {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // No async needed - posts are already available
    setLoading(true);
    try {
      const searched = search(posts, ['title', 'description', 'tags', 'host'], searchString || '');
      setResults(searched);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result: Post) =>
      result.tags?.some((tag: string) => filters.includes(tag)),
    );
  }, [results, filters]);

  const sortedResults = useMemo(() => resultsByTags.sort(byDate), [resultsByTags]);

  return {
    isEmptyResult: !loading && sortedResults.length === 0,
    results: sortedResults,
    loading,
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getBlogTags(sortedResults),
    allTags: getBlogTags(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}

function byDate(a: Post, b: Post) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}
