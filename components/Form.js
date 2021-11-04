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
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Textarea,

  } from '@chakra-ui/react';
  import { AttentionSeeker } from 'react-awesome-reveal'

  import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

  import {Zoom} from 'react-awesome-reveal'
  export default function Form() {
    return (
        <Box maxW={'100vw'} px={{base: '0', md: '20'}} pt={{base: '10', md: '0'}} pb={'20'} alignItems={'center'}>
            <Zoom >
            <Box maxW={{base: '90vw', md: '80vw'}} minH='400px' backgroundImage={'/images/contact_background.png'} backgroundPosition={'center top'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} p={{base: '3', md: '12'}} borderRadius={'xl'} shadow={'dark-lg'} >
                <Flex color="white" m={{base: '3', md: '0'}} direction={{base: 'column', md: 'row'}} justifyContent={{base:'flex-start',md: 'center'}}>
                    <Box>
                        <Heading color={'yellow.500'} >Contact Us</Heading>
                        <Text fontSize={{base: 'sm', md: 'md'}} mt={'4'} maxW={'80%'} >You can contact us for Product Availblity, Prices, Inquiry, or if you have any querries. You can use the following options or fill the given form.</Text>

                        <Stack direction={'column'} mt={'5'} >
                            <Flex>
                                <Icon color={'yellow.500'} mr={'3'} w={6} h={6} as={FaPhone} />
                                <Text fontSize={'18'} fontWeight={'bold'} >+91 98690 59471</Text>
                            </Flex>
                            
                            <Flex>
                                <Icon color={'yellow.500'} mr={'3'} w={6} h={6} as={FaEnvelope} />
                                <Text fontSize={'18'} fontWeight={'bold'} >example@email.com</Text>
                            </Flex>
                            
                        </Stack>

                        <Stack mt={'10'} direction={'row'} >
                            <AttentionSeeker delay={500} effect='headShake' cascade >
                            <Button 
                                justifyContent={'flex-start'} 
                                alignItems={'center'} 
                                w={'max-content'} 
                                bg={'transparent'} 
                                p={'5'} 
                                borderRadius={'xl'}  
                                borderWidth={'medium'} 
                                borderColor={'yellow.500'} 
                                color={'yellow.500'}
                                _hover={{
                                    bg: 'yellow.500',
                                    color: 'blue.500'
                                }}  
                            >
                                <Icon as={FaPhone} w={5} h={5}  />
                            </Button>
                            <Button 
                                justifyContent={'flex-start'} 
                                alignItems={'center'} 
                                w={'max-content'} 
                                bg={'transparent'} 
                                p={'5'} 
                                borderRadius={'xl'}  
                                borderWidth={'medium'} 
                                borderColor={'yellow.500'} 
                                color={'yellow.500'}
                                _hover={{
                                    bg: 'yellow.500',
                                    color: 'blue.500'
                                }}  
                            >
                                <Icon as={FaEnvelope} w={5} h={5}  />
                            </Button>
                            <Button 
                                justifyContent={'flex-start'} 
                                alignItems={'center'} 
                                w={'max-content'} 
                                bg={'transparent'} 
                                p={'5'} 
                                borderRadius={'xl'}  
                                borderWidth={'medium'} 
                                borderColor={'yellow.500'} 
                                color={'yellow.500'}
                                _hover={{
                                    bg: 'yellow.500',
                                    color: 'blue.500'
                                }}  
                            >
                                <Icon as={FaWhatsapp} w={5} h={5}  />
                            </Button>
                            <Button 
                                w={'max-content'} 
                                bg={'transparent'} 
                                p={'5'} 
                                borderRadius={'xl'}  
                                borderWidth={'medium'} 
                                borderColor={'yellow.500'} 
                                color={'yellow.500'}
                                _hover={{
                                    bg: 'yellow.500',
                                    color: 'blue.500'
                                }}  
                                _pressed={{
                                    bg: 'yellow.500',
                                    color: 'blue.500'
                                }}
                            >
                                <Icon as={FaInstagram} w={5} h={5}  />
                            </Button>
                            </AttentionSeeker>
                        </Stack>
                    </Box>  
                    <Box>
                        <VStack spacing={5} mt={{base: '10', md: '0'}} >
                            <FormControl id="name">
                                <InputGroup backgroundColor={'white'} borderRadius={'md'} >
                                <Input 
                                    type="text" 
                                    color={'black'} 
                                    size="md" 
                                    width={'md'} 
                                    placeholder='Name' 
                                    _placeholder={{
                                        color: 'gray.600'
                                    }} 
                                />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="email">
                                <InputGroup backgroundColor={'white'} borderRadius={'md'}>
                                <Input 
                                    type={'email'} 
                                    color={'black'} 
                                    size="md" 
                                    width={'md'} 
                                    placeholder='Email' 
                                    _placeholder={{
                                        color: 'gray.600'
                                    }}
                                />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="email">
                                <InputGroup backgroundColor={'white'} borderRadius={'md'}>
                                <Input 
                                    type={'tel'} 
                                    color={'black'} 
                                    size="md" 
                                    width={'md'} 
                                    placeholder='Phone' 
                                    _placeholder={{
                                        color: 'gray.600'
                                    }}
                                />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <Textarea
                                bgColor={'white'}
                                borderRadius={'md'}
                                placeholder="message"
                                _placeholder={{
                                    color: 'gray.600'
                                }} 
                                />
                            </FormControl>
                            
                            <FormControl id="name" float="right">
                                <Button
                                variant="solid"
                                bg={'yellow.500'}
                                color="blue.500"
                                _hover={{}}>
                                Send Message
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>     
                </Flex>
            </Box>
            </Zoom>
        </Box>
    );
  }