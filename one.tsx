{/*import React from 'react';
import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Container from 'components/container';
import ViewMore from 'components/view-more';
import { posts } from '#site/content';
import type { Post } from '#site/content';
import tools from 'lib/tools';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from 'site.config';
import formatDate from 'lib/format-date';

interface AchievementItemProps {
  icon: React.ComponentType;
  children: React.ReactNode;
}

function AchievementItem({ icon, children }: AchievementItemProps) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      {...props}
    />
  );
}

export default function HomePage() {
  // Get featured blog posts
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <Container>
      {/* Hero Section */}
      {/*
      <Flex direction="column" paddingY="24">
        <MainHeading>Matthew Adebayo</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
        >
          Full-stack Engineer 
        </Text>
        */}
        {/* I'm passionate about... */}
        {/*}
        <Text
          marginTop="14"
          fontFamily="body"
          maxWidth="60rem"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
           Hi 👋 , I'm Adebayo Matthew—a full-stack developer building high-performance web applications at the intersection of Web3, AI, and blockchain.
          I craft seamless user experiences and scalable backends using React, Next.js, Node.js, and Web3 technologies. From traditional web apps to decentralized solutions, I turn bold ideas into products people love.
          Let's build something extraordinary.
        </Text>

      </Flex>

      {/* Featured Blog Posts */}
      {/*}
      {featuredPosts.length > 0 && (
        <Box as="section" py="vGutter" position="relative">
          <Heading size="3xl" letterSpacing="tight" position="relative">
            Featured Posts
          </Heading>
          <Box marginTop="20" marginBottom="10">
            <Stack spacing="10">
              {featuredPosts.map((post: Post) => (
                <Link key={post.slug} href={`/blog/${post.slugAsParams}`}>
                  <Box
                    padding="8"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    borderRadius="lg"
                    transition="all 0.2s"
                    _hover={{
                      borderColor: 'brown.600',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <Heading size="lg" marginBottom="3">
                      {post.title}
                    </Heading>
                    <Text color="gray.400" marginBottom="4">
                      {post.description}
                    </Text>
                    <HStack spacing="4" fontSize="sm" color="brown.600">
                      <Text>{formatDate(post.publishedAt).pretty}</Text>
                      <Text>•</Text>
                      <Text>{post.readingTime?.text}</Text>
                    </HStack>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>

          <Link href="/blog">
            <ViewMore as="div">View all Posts</ViewMore>
          </Link>
        </Box>
      )}
        */}

      {/* Tools & Softwares */}
      {/*
      <Box as="section" py="vGutter">
        <Box marginBottom="12">
          <Heading size="3xl" letterSpacing="tight">
            Tools &amp; Softwares
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Over the years, I had the opportunity to work with various software, tools and
            frameworks. Here are some of them:
          </Text>
        </Box>
        */}
        {/* ToolList */}
        {/*
        <Wrap spacing="8">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="brown.600" key={tool}>
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
}
*/}