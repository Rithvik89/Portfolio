import {
  Box,
  Flex,
  Link,
  Stack,
  IconButton,
  useDisclosure,
  Collapse,
  HStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      position="fixed"
      w="100%"
      bg="gray.50"
      px={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box
          fontWeight="bold"
          fontSize="2xl"
          color="black"
          fontStyle="italic"
          letterSpacing="tight"
          _hover={{ transform: 'scale(1.05)' }}
          transition="all 0.3s ease"
        >
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            Rithvik Reddy
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link 
            as={RouterLink} 
            to="/" 
            _hover={{ 
              textDecoration: 'none',
              color: 'blue.400',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s ease"
          >
            Home
          </Link>
          <Link 
            as={RouterLink} 
            to="/projects" 
            _hover={{ 
              textDecoration: 'none',
              color: 'pink.400',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s ease"
          >
            Projects
          </Link>
          <Link 
            as={RouterLink} 
            to="/library" 
            _hover={{ 
              textDecoration: 'none',
              color: 'blue.400',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s ease"
          >
            Library
          </Link>
          <Link 
            as={RouterLink} 
            to="/blogs" 
            _hover={{ 
              textDecoration: 'none',
              color: 'purple.400',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s ease"
          >
            Blogs
          </Link>
        </HStack>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          _hover={{ bg: 'transparent' }}
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          pb={4}
          display={{ md: 'none' }}
          bg="white"
          boxShadow="lg"
        >
          <Stack as="nav" spacing={4}>
            <Link
              as={RouterLink}
              to="/"
              p={2}
              _hover={{ 
                textDecoration: 'none', 
                bg: 'blue.50',
                color: 'blue.400',
                transform: 'translateX(5px)'
              }}
              transition="all 0.3s ease"
              onClick={onToggle}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/projects"
              p={2}
              _hover={{ 
                textDecoration: 'none', 
                bg: 'pink.50',
                color: 'pink.400',
                transform: 'translateX(5px)'
              }}
              transition="all 0.3s ease"
              onClick={onToggle}
            >
              Projects
            </Link>
            <Link
              as={RouterLink}
              to="/library"
              p={2}
              _hover={{ 
                textDecoration: 'none', 
                bg: 'blue.50',
                color: 'blue.400',
                transform: 'translateX(5px)'
              }}
              transition="all 0.3s ease"
              onClick={onToggle}
            >
              Library
            </Link>
            <Link
              as={RouterLink}
              to="/blogs"
              p={2}
              _hover={{ 
                textDecoration: 'none', 
                bg: 'purple.50',
                color: 'purple.400',
                transform: 'translateX(5px)'
              }}
              transition="all 0.3s ease"
              onClick={onToggle}
            >
              Blogs
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}

export default Navbar 