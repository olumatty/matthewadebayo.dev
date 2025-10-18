import { Box, Circle, Flex, HStack, Heading, Text, chakra } from '@chakra-ui/react';
import AuthorProfile from 'components/author-profile';
import Container from 'components/container';
import HashTags from 'components/hash-tags';
import LinkItem from 'components/link-item';
import SEO from 'components/seo';
import { TwitterIcon } from 'components/social-icons';
import { posts } from '#site/content';
import type { Post } from '#site/content';
import formatDate from 'lib/format-date';
import { getAbsoluteURL } from 'lib/router-utils';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponents from 'components/mdx-components';

interface BlogPageProps {
  blog: Post;
  ogImageUrl: string;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPage({ blog, ogImageUrl, mdxSource }: BlogPageProps) {
  const date = formatDate(blog.publishedAt);

  return (
    <Container>
      <SEO
        image={ogImageUrl}
        title={blog.title}
        description={blog.description}
        post={{ date: date.iso, tags: blog.tags }}
      />
      <Box maxWidth="4xl" marginX="auto" paddingTop="12" paddingBottom="8rem">
        <article>
          <Box marginBottom="6">
            <Heading size="2xl" as="h1" marginBottom="8" color="white">
              {blog.title}
            </Heading>

            <HashTags data={blog.tags || []} />

            <Flex
              direction={{ base: 'column-reverse', md: 'row' }}
              gap="4"
              justify="space-between"
              marginTop={{ base: '4', md: '8' }}
            >
              <HStack spacing="3">
                <Circle overflow="hidden" rounded="full" size="12">
                  <Image
                    priority
                    alt="Matthew Adebayo"
                    src="https://res.cloudinary.com/dynnrnlzx/image/upload/v1760819412/Gemini_Generated_Image_d73amtd73amtd73a_j7erg2.png"
                    width={48}
                    height={48}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                    }}
                  />
                </Circle>
                <Text fontWeight="medium">Matthew Adebayo</Text>
              </HStack>

              <HStack color="brown.600">
                <chakra.span>{blog.readingTime?.text || '5 min read'}</chakra.span>
                <span aria-hidden>•</span>
                <time dateTime={date.iso}>{date.pretty}</time>
              </HStack>
            </Flex>
          </Box>

          <Box
            position="relative"
            height="400px"
            rounded="lg"
            overflow="hidden"
            marginTop="10"
            marginBottom="16"
          >
            <Image src={blog.image} alt={blog.title} fill style={{ objectFit: 'cover' }} priority />
          </Box>

          <Box
            sx={{
              color: 'gray.300',
              lineHeight: 'taller',
              'p + p': {
                marginY: '1.25em',
              },
            }}
          >
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </Box>
        </article>

        <Flex justify="space-between" my="20">
          <LinkItem href={blog.tweetUrl || '#'} icon={TwitterIcon}>
            Tweet this article
          </LinkItem>
        </Flex>

        <Box as="hr" borderColor="whiteAlpha.200" mt="3rem" />

        <Box as="hr" borderColor="whiteAlpha.200" mt="3rem" mb="9rem" />

        <AuthorProfile />
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slugAsParams }, // Changed from post.slug to post.slugAsParams
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ params }) => {
  const blog = posts.find((post) => post.slugAsParams === params?.slug); // Changed from post.slug

  if (!blog) {
    return { notFound: true };
  }

  // Serialize the MDX content using next-mdx-remote
  const mdxSource = await serialize(blog.content || '');

  const searchParams = new URLSearchParams();
  searchParams.set('title', blog.title);
  searchParams.set('tags', blog.tags?.join(',') || '');
  searchParams.set('date', formatDate(blog.publishedAt).pretty);
  searchParams.set('readingTime', blog.readingTime?.text || '');
  const ogImageUrl = getAbsoluteURL(`/api/open-graph-image?${searchParams.toString()}`);

  return { props: { blog, ogImageUrl, mdxSource } };
};
