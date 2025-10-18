import { Post } from '#site/content';
import { Box, Heading, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const { title, publishedAt, image, readingTime, slugAsParams } = post;
  const date = formatDate(publishedAt);

  return (
    <LinkBox>
      <Box height="210px" rounded="lg" overflow="hidden" position="relative">
        <Image
          src={image}
          alt={title}
          width={340}
          height={210}
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      <Box flex="1" mt="5">
        <HStack spacing="5" fontSize="sm">
          <HStack spacing="2" color="brown.300">
            <Box as="time" dateTime={date.iso}>
              {date.pretty}
            </Box>
            <span aria-hidden>•</span>
            {/* Optional chain + fallback */}
            <Box>{readingTime?.text || '5 min read'}</Box>
          </HStack>
        </HStack>

        <Heading size="lg" fontWeight="semibold" marginY="4">
          <LinkOverlay as={Link} href={`/blog/${slugAsParams}`}>
            {title}
          </LinkOverlay>
        </Heading>
      </Box>
    </LinkBox>
  );
}
