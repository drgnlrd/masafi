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
    Link as ChakraLink,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  import { Link } from 'react-scroll'
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
    };
    if(typeof window !== "undefined"){
      window.addEventListener('scroll', changeNavbarColor )
    }
    return (
      <Box zIndex={2} shadow={'md'} sx={{ position: 'sticky', top: 0 }}  >
        <Flex
          bg={colorChange==false?'transparent':'blue.500'}
          color={'white'}
          minH={'60px'}
          position={'absolute'}
          top={0}
          shadow={colorChange==false||isOpen?'none':'xl'}
          width={'100%'}
          zIndex={2}
          py={{ base: 2 }}
          px={{ base: 4, md: 14 }}
          align={'center'}
          justifyContent={'space-between'}
        >
        
          
          <Flex flex={{ base: 1 }} justify={{ base: 'left', md: 'start' }}>
            <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800','white')}>
                <Flex display={{ base: 'none', md: 'flex' }} >
                    <Image src="/images/masafi_logo.png" h="60px" w="auto" />
                </Flex>
                <Flex display={{ base: 'flex', md: 'none' }} >
                    <Image src="/images/masafi_logo.png" h="40px" w="auto" />
                </Flex>
                
            </Text>
  
            
          </Flex>
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
          </Flex>
          <Flex
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav closeNav={onToggle} />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = 'white';
    const linkHoverColor = 'yellow.500';
    const popoverContentBgColor = 'blue.400';
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom'}>
              <PopoverTrigger>
                <ChakraLink
                  as={Link}
                  to={navItem.href}
                  p={2}
                  duration={500}
                  smooth={true}
                  offset={-70}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </ChakraLink>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <ChakraLink
        as={Link}
        to={href}
        smooth={true}
        offset={-70}
        duration={500}
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'blue.500'}}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'yellow.500' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'yellow.500'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    );
  };
  
  const MobileNav = ({closeNav}) => {
    return (
      <Stack
        bg={'blue.500'}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem closeNav={closeNav} key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href, closeNav }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} mt={'10'} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          to={href}
          offset={-300}
          smooth={true}
          duration={500}
          onClick={closeNav}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={'white'}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              color={'white'}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <ChakraLink as={Link} to={child.href} key={child.label} color={'white'} py={2} href={child.href}>
                  {child.label}
                </ChakraLink>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'Home',
      href: 'home',
    },
    {
      label: 'About',
      href: 'about'
    },
    {
      label: 'Products',
      href: 'products',
    },
    {
      label: 'Contact',
      href: 'contact',
    },
  ];