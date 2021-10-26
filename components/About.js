import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function About() {
    return (
      <Stack minH={'80vh'} mt={{base: '28', md: '0'}} maxW={{base:'80vw',md: '80vw'}} mb={'12'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} align={'flex-start'} justify={'center'}>
          <Stack spacing={6} mt={{base:'10',md:'20'}} >
            <Heading color={'blue.500'} fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                Who We Are
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'md', lg: 'lg' }} color={'gray.600'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec ultricies posuere, quam enim sagittis purus, in viverra tellus ante vel ipsum. Nam ultricies mi urna, eu feugiat felis pulvinar in. Vestibulum sit amet neque at arcu accumsan tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec ultricies posuere, quam enim sagittis purus, in viverra tellus ante vel ipsum. Nam ultricies mi urna, eu feugiat felis pulvinar in. Vestibulum sit amet neque at arcu accumsan tempus.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={'flex-end'} >
          <Image
            alt={'Login Image'}
            boxSize={{base:'sm', md: 'xs', lg: 'sm'}}
            objectFit={'contain'}
            mt={{base: '10', md: '20'}}
            mr={{base: '0', md: '0', lg: '10'}}
            mb={{base: '10', md: '0'}}
            src={
              '/images/logo_group.png'
            }
          />
        </Flex>
      </Stack>
    );
  }