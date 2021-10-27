import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

import { Fade } from 'react-awesome-reveal';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} maxW={'90vw'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} align={'flex-start'} justify={'center'}>
          <Stack spacing={6} mt={{base:'10', md:'0', lg: '20'}} >
            <Fade direction='left' triggerOnce >
              <Heading color={'yellow.500'} fontSize={{ base: '4xl', md: '3xl', lg: '5xl' }}>
                  Lorem Ipsum Dolor{'\n'}Sit Amet.
                <br />{' '}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'sm', lg: 'md' }} color={'white'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec ultricies posuere, quam enim sagittis purus, in viverra tellus ante vel ipsum. Nam ultricies mi urna, eu feugiat felis pulvinar in. Vestibulum sit amet neque at arcu accumsan tempus.
              </Text>
              </Fade>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'yellow.500'}
                color={'blue.500'}
                _hover={{
                  bg: 'yellow.600',
                  color: 'blue.300'
                }}
                py={'6'}
                zIndex={'1 !important'}>
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={'flex-end'} >
          <Fade direction='right' triggerOnce delay={500} >
            <Image
              alt={'Login Image'}
              boxSize={{base:'md', md: 'md', lg: 'lg'}}
              objectFit={'contain'}
              mt={{base: '10', md: '0'}}
              src={
                '/images/oil_example.png'
              }
            />
          </Fade>
          
        </Flex>
      </Stack>
    );
  }