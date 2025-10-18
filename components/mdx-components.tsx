import { AspectRatio, Box, Stack, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ChakraLink = React.forwardRef<HTMLAnchorElement, any>(function ChakraLink(props, ref) {
  return (
    <chakra.a
      ref={ref}
      color="white"
      fontWeight="semibold"
      textDecor="underline"
      textUnderlineOffset="6px"
      textDecorationColor="brown.700"
      _hover={{ bg: 'gray.700' }}
      {...props}
    />
  );
});

interface CustomLinkProps {
  href?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const CustomLink = (props: CustomLinkProps) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return <ChakraLink as={Link} href={href} {...props} />;
  }
  return <ChakraLink target="_blank" rel="noopener noreferrer" {...props} />;
};

interface ImageProps {
  src: string;
  ratio?: number;
  alt: string;
  marginY?: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  caption?: boolean;
  maxWidth?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

const MDXComponents: Record<string, React.FC<any>> = {
  a: CustomLink,
  ul(props) {
    return <chakra.ul paddingStart="4" marginY="5" {...props} />;
  },
  ol(props) {
    return <chakra.ol paddingStart="4" marginY="5" {...props} />;
  },
  li(props) {
    return <chakra.li marginY="2" sx={{ '&::marker': { color: 'brown.600' } }} {...props} />;
  },
  p(props) {
    return <chakra.p marginY="1.25em" {...props} />;
  },
  h2(props) {
    return (
      <chakra.h2
        lineHeight="1.5em"
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="semibold"
        marginTop="16"
        marginBottom="4"
        {...props}
      />
    );
  },
  h3(props) {
    return (
      <chakra.h3
        lineHeight="1.5em"
        fontSize="xl"
        fontFamily="heading"
        fontWeight="semibold"
        marginTop="12"
        marginBottom="4"
        {...props}
      />
    );
  },
  blockquote(props) {
    return (
      <chakra.blockquote
        color="white"
        marginY="8"
        paddingX="6"
        paddingY="4"
        marginX="-6"
        bg="gray.800"
        sx={{ borderLeft: '4px solid', borderColor: 'brown.600' }}
        {...props}
      />
    );
  },
  Image({
    ratio,
    alt,
    marginY = '4rem',
    fit,
    caption,
    maxWidth,
    src,
    width,
    height,
    ...rest
  }: ImageProps) {
    if (ratio) {
      return (
        <Stack as="figure" marginY={marginY} spacing="5">
          <AspectRatio ratio={ratio} position="relative" maxWidth={maxWidth}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="img"
              style={{ overflow: 'visible', objectFit: fit }}
              {...rest}
            />
          </AspectRatio>
          {caption && (
            <chakra.figcaption fontSize="small" textAlign="center" color="gray.400">
              {alt}
            </chakra.figcaption>
          )}
        </Stack>
      );
    }
    return (
      <Stack as="figure" marginY={marginY} maxWidth={maxWidth}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="img"
          style={{ objectFit: fit }}
          {...rest}
        />
        {caption && (
          <chakra.figcaption fontSize="small" textAlign="center" color="gray.400">
            {alt}
          </chakra.figcaption>
        )}
      </Stack>
    );
  },
  hr(props) {
    return <chakra.hr borderColor="whiteAlpha.100" marginY="3em" {...props} />;
  },
  code(props) {
    // Inline code (not inside a pre block)
    if (typeof props.children === 'string' && !props.className) {
      return (
        <chakra.code
          color="brown.300"
          bg="rgba(0,0,0,0.3)"
          px="1"
          py="0.5"
          rounded="sm"
          fontSize="0.9em"
          fontFamily="mono"
        >
          {props.children}
        </chakra.code>
      );
    }
    // Code block - let Prism handle it
    return <code {...props} />;
  },
  pre(props) {
    // Let Prism CSS handle the styling
    return <pre {...props} />;
  },
  strong(props) {
    return <chakra.strong fontWeight="semibold" color="white" {...props} />;
  },
  table(props) {
    return (
      <chakra.table
        marginY="10"
        width="full"
        sx={{
          borderCollapse: 'collapse',
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'gray.700',
            th: {
              textAlign: 'start',
              padding: '2',
              verticalAlign: 'bottom',
              color: 'gray.200',
            },
          },
          tbody: {
            tr: {
              borderBottomWidth: '1px',
              borderBottomColor: 'gray.800',
            },
            td: {
              padding: '2',
            },
          },
        }}
        {...props}
      />
    );
  },
  LinkCover(props) {
    const { href, title, ...rest } = props;
    return (
      <chakra.a display="block" pos="relative" href={href} target="_blank" {...rest}>
        {props.children}
        {title && (
          <Box
            as="span"
            px="1.5"
            rounded="md"
            fontSize="sm"
            bg="rgba(0,0,0,0.5)"
            color="white"
            pos="absolute"
            bottom="4"
            left="4"
          >
            {title}
          </Box>
        )}
      </chakra.a>
    );
  },
};

export default MDXComponents;
