import { Box, Circle, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Emoji from './emoji';

export default function AuthorProfile() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '4', md: '8' }}>
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
      <Box>
        <Heading size="md">Written by Matthew Adebayo</Heading>
        <Text mt="4" lineHeight="taller">
          Matthew Adebayo is a Software Engineer who specializes in bringing complex software ideas to life. He is passionate about helping people build accessible web faster. 
        </Text>
      </Box>
    </Flex>
  );
}
