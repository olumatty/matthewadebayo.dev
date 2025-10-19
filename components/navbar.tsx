import {
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  StackProps,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode } from 'react';
import { BlogIcon } from './nav-icons';

type NavItemProps = {
  data: NavItemData;
  active?: boolean;
  children: ReactNode;
};

function NavItem(props: NavItemProps) {
  const { children, data, active } = props;
  return (
    <HStack
      as={Link}
      href={data.href}
      spacing="2"
      paddingX="3"
      paddingY="2.5"
      rounded="lg"
      aria-current={active ? 'page' : undefined}
      _hover={{ color: 'brown.600' }}
      _activeLink={{ bg: 'gray.800', shadow: 'highlight' }}
    >
      <Icon as={data.icon} color="brown.600" fontSize="lg" />
      <Text fontFamily="heading">{children}</Text>
    </HStack>
  );
}

interface NavItemData {
  label: string;
  href: string;
  icon: ElementType;
}

const items: NavItemData[] = [
  { label: 'Blog', href: '/blog', icon: BlogIcon },
];

function NavItemGroup(props: StackProps) {
  const { asPath } = useRouter();
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
      {items.map((item) => (
        <NavItem key={item.label} data={item} active={asPath.startsWith(item.href)}>
          {item.label}
        </NavItem>
      ))}
    </HStack>
  );
}

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
        <NavItemGroup />
      </Flex>
    </Box>
  );
}