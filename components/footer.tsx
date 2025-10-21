import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import siteConfig from 'site.config';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, LinkedInIcon } from './social-icons';

export default function Footer() {
  return (
    <Box as="footer" position="relative" paddingY="8">
      <Box maxWidth="6xl" marginX="auto" paddingX="6" mx="auto">
        {/* Centered social links */}
        <HStack marginTop="6" spacing={{ base: '8', md: '10' }} justify="center">
          <LinkItem href={siteConfig.profiles.linkedin} icon={LinkedInIcon}>
            LinkedIn
          </LinkItem>
          <LinkItem href={siteConfig.profiles.github} icon={GithubIcon}>
            GitHub
          </LinkItem>
          <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
            Email
          </LinkItem>
        </HStack>

        {/* Centered copyright text */}
        <Text marginTop="12" opacity="0.7" textAlign="center">
          All rights reserved &copy; Matthew Adebayo {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
