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
  
  export default function Products() {
      
    return(
        <Box p={'10'} w={'100%'} maxW={'100vw'} minH={'80vh'} backgroundColor={'yellow.300'} id="products" >
            <Heading color={'blue.500'} textAlign={'center'} fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }} >
                Our Creations
            </Heading>
            <Flex color="white" mt={'12'} mb={'12'} direction={{base: 'column', md: 'row'}} justifyContent={'center'} align={'center'}>
                <Center backgroundImage={'/images/product_background.png'} shadow={'dark-lg'} backgroundSize={{base:'inherit', md: 'inherit'}} minH={'400px'} minW={'300px'} backgroundPosition={'center'} borderRadius={'lg'} px={'5'} py={'5'} flexDirection={'column'} justifyContent={'flex-start'} mx={{base:'0', md: '10', lg: '16'}} >
                    <Image src={'/images/sample_product.png'} mt={'6'} borderRadius={'lg'} height={'180px'} width={'180px'} />
                    <Heading size={'md'} mt={'6'} >Product Name</Heading>
                    <Text mt={'6'} mb={'6'} color={'white'} maxWidth={'300px'} textAlign={'center'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ipsum ut elit facilisis malesuada quis at est. Aenean posuere imperdiet mauris, sed consequat nunc commodo ut.</Text>
                </Center>
                <Center mt={{base: '10', md: '0'}} backgroundImage={'/images/product_background.png'} shadow={'dark-lg'}  backgroundSize={{base:'inherit', md: 'inherit'}} minH={'400px'} minW={'300px'} backgroundPosition={'center'} borderRadius={'lg'} px={'5'} py={'5'} flexDirection={'column'} justifyContent={'flex-start'} mx={{base:'0', md: '10', lg: '16'}} >
                    <Image src={'/images/sample_product.png'} borderRadius={'lg'} mt={'6'} height={'180px'} width={'180px'} />
                    <Heading size={'md'} mt={'6'} >Product Name</Heading>
                    <Text mt={'6'} mb={'6'} color={'white'} maxWidth={'300px'} textAlign={'center'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ipsum ut elit facilisis malesuada quis at est. Aenean posuere imperdiet mauris, sed consequat nunc commodo ut.</Text>
                </Center>
                
            </Flex>
        </Box>
    )
  }

