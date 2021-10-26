import React, {useState} from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Heading,
    Center,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';

  import { GiHotMeal } from 'react-icons/gi'
  import { FaHandHoldingHeart, FaDumbbell, FaAward } from 'react-icons/fa'

  export default function Features() {
      
    return(
        <Box p={'10'} w={'100%'} maxW={'100vw'} minH={'80vh'}>
            <Heading color={'blue.500'} textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }} >
                Why Choose Us
            </Heading>
            <Flex color="white" mt={{base: '5', md: '16'}} mb={'2'} direction={{base: 'column', md: 'row'}} justifyContent={'center'} align={'center'}>
                <Center mt={{base: '10', md: '0'}} mx={'5'} color={'black'} flexDirection={'column'} >
                    <Box justifyContent={'center'} alignItems={'center'} minH={15} minW={15} backgroundColor={'yellow.300'} borderRadius={'50%'} borderWidth={'thick'} borderColor={'blue.500'} p={'3'} >
                        <Icon as={FaAward} color={'blue.500'} w={12} h={12} />
                    </Box>
                    <Text maxW={'400px'} fontWeight={'bold'} color={'blue.600'} mt={'5'} fontSize={{base: '14', md: '16'}} textAlign={'center'}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec.</Text>
                </Center>
                <Center mt={{base: '10', md: '0'}} mx={'5'} color={'black'} flexDirection={'column'} >
                    <Box justifyContent={'center'} alignItems={'center'} minH={15} minW={15} backgroundColor={'yellow.300'} borderRadius={'50%'} borderWidth={'thick'} borderColor={'blue.500'} p={'3'} >
                        <Icon as={FaHandHoldingHeart} color={'blue.500'} w={12} h={12} />
                    </Box>
                    <Text maxW={'400px'} fontWeight={'bold'} color={'blue.600'} mt={'5'} fontSize={{base: '14', md: '16'}} textAlign={'center'}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec.</Text>
                </Center>
                <Center mt={{base: '10', md: '0'}} mx={'5'} color={'black'} flexDirection={'column'} >
                    <Box justifyContent={'center'} alignItems={'center'} minH={15} minW={15} backgroundColor={'yellow.300'} borderRadius={'50%'} borderWidth={'thick'} borderColor={'blue.500'} p={'3'} >
                        <Icon as={FaDumbbell} color={'blue.500'} w={12} h={12} />
                    </Box>
                    <Text maxW={'400px'} fontWeight={'bold'} color={'blue.600'} mt={'5'} fontSize={{base: '14', md: '16'}} textAlign={'center'}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec.</Text>
                </Center>
                <Center mt={{base: '10', md: '0'}} mx={'5'} color={'black'} flexDirection={'column'} >
                    <Box justifyContent={'center'} alignItems={'center'} minH={15} minW={15} backgroundColor={'yellow.300'} borderRadius={'50%'} borderWidth={'thick'} borderColor={'blue.500'} p={'3'} >
                        <Icon as={GiHotMeal} color={'blue.500'} w={12} h={12} />
                    </Box>
                    <Text maxW={'400px'} fontWeight={'bold'} color={'blue.600'} mt={'5'} fontSize={{base: '14', md: '16'}} textAlign={'center'}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque, nibh nec.</Text>
                </Center>
            </Flex>
        </Box>
    )
  }
  