import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    Image,
    Flex,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
  
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.400', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        backgroundImage={'/images/footer_background.png'}
        backgroundPosition={'center top'}
        pt={'12'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        w={'full'}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          color={'white'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            color={'white'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Flex display={{base: 'none', md: 'flex'}} direction={'row'} alignItems={'center'} >
                <Image src={'/images/masafi_logo.png'} boxSize={'24'} mr={'5'} objectFit={'contain'} />
                <Image src={'/images/nic.png'} boxSize={'16'} objectFit={'contain'} />
            </Flex>
            <Text fontSize={{base: 'sm', md: 'md'}} >© 2020 Noor Agro Industry LTD. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Call'} href={'#'}>
                <FaPhone />
              </SocialButton>
              <SocialButton label={'Email'} href={'#'}>
                <FaEnvelope />
              </SocialButton>
              <SocialButton label={'Whatsapp'} href={'#'}>
                <FaWhatsapp />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Flex display={{base: 'flex', md: 'none'}} direction={'row'} alignItems={'center'} >
                <Image src={'/images/masafi_logo.png'} boxSize={'24'} mr={'5'} objectFit={'contain'} />
                <Image src={'/images/nic.png'} boxSize={'16'} objectFit={'contain'} />
            </Flex>
          </Container>
        </Box>
      </Box>
    );
  }