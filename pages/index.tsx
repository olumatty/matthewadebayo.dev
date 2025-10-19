import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import Container from 'components/container';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import useBlogSearch from 'lib/use-blog-search';
import { useRouter } from 'next/router';

export default function Page() {
  const search = useBlogSearch();
  const { isReady } = useRouter();

  return (
    <Container>
      <SEO title="Blog" />
      <Box py="8">
        <Box>
          <Heading size="3xl" marginBottom="6" as="h1" color="white">
            Blog
          </Heading>
        </Box>
        <Box maxWidth="xl" mt="8">
          <SearchInput
            placeholder="Search blog"
            defaultValue={search.defaultValue}
            onChange={(value) => {
              search.setParams(value);
            }}
          />
        </Box>
        <Box marginTop="3rem">
          <SimpleGrid columns={{ base: 1, md: 3 }} mt="4rem" spacing="10">
            {isReady && search.results.map((blog) => (
              <BlogCard key={blog.title} post={blog} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}