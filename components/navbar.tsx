import { Box, Circle, Flex, VisuallyHidden } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

function Headshot() {
  return (
    <Circle size="10" rounded="full" borderWidth="2px" borderColor="brown.600">
      <Circle rounded="full" overflow="hidden" size="8">
        <VisuallyHidden>Home</VisuallyHidden>
        <Image
          priority
          alt="Matthew Adebayo"
          src="https://res.cloudinary.com/dynnrnlzx/image/upload/v1760819412/Gemini_Generated_Image_d73amtd73amtd73a_j7erg2.png"
          width={32}
          height={32}
          style={{ objectFit: 'cover', borderRadius: '50%', width: '100%', height: '100%' }}
        />
      </Circle>
    </Circle>
  );
}

export default function Navbar() {
  return (
    <Box as="header" paddingY="6" maxWidth="6xl" marginX="auto" paddingX="6">
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Headshot />
        </Link>
      </Flex>
    </Box>
  );
}
