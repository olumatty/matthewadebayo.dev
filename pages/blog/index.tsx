import { Box, Heading, Stack } from '@chakra-ui/react';
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
      <Box py="8" mx="auto">
        <Box mx="auto">
          <Heading
            size="2xl"
            marginBottom="6"
            as="h2"
            color="white"
            mx="auto"
            alignContent={'center'}
          >
            Blog
          </Heading>
        </Box>
        <Box maxWidth="2xl" mt="8">
          <SearchInput
            placeholder="Search blog"
            defaultValue={search.defaultValue}
            onChange={(value) => {
              search.setParams(value);
            }}
          />
        </Box>
        <Box marginTop="3rem" maxWidth="2xl">
          <Stack spacing="6" mt="4rem" direction="column">
            {isReady && search.results.map((blog) => <BlogCard key={blog.title} post={blog} />)}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
