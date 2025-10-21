import { Post } from '#site/content';
import { Box, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Link from 'next/link';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const { title, publishedAt, readingTime, slugAsParams, content } = post;
  const date = formatDate(publishedAt);

  // Extract first line from content
  const excerpt =
    content
      ?.split('\n')
      .find((line) => line.trim().length > 0)
      ?.substring(0, 200) || '';

  return (
    <LinkBox
      bg="whiteAlpha.50"
      p="6"
      rounded="lg"
      _hover={{ bg: 'whiteAlpha.100' }}
      transition="background 0.2s"
    >
      <Heading size="md" fontWeight="semibold" mb="3">
        <LinkOverlay as={Link} href={`/blog/${slugAsParams}`}>
          {title}
        </LinkOverlay>
      </Heading>

      <HStack spacing="2" fontSize="sm" color="gray.400" mb="3">
        <Box as="time" dateTime={date.iso}>
          {date.pretty}
        </Box>
        <span aria-hidden>•</span>
        <Box>{readingTime?.text || '5 min read'}</Box>
      </HStack>

      <Text color="gray.300" fontSize="md">
        {excerpt}
      </Text>
    </LinkBox>
  );
}
