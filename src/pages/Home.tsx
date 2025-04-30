import { Box, Container, VStack, Heading, Text, HStack, Icon, Link, Divider } from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import LatestBlogs from '../components/LatestBlogs'

const Home = () => {
  return (
    <Box bg="white">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="stretch">
          {/* About Section */}
          <Box>
            <Heading as="h1" size="xl" mb={6}>
              About Me
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              I'm a Software Engineer at VISA, where I've been working since June 2023. My passion lies in distributed systems and building scalable infrastructure.
            </Text>
            <Text fontSize="ll" color="gray.600" mb={4}>
              Currently, I'm focused on two exciting projects:
            </Text>
            <VStack align="start" spacing={3} mb={6}>
              <Text fontSize="ll" color="gray.600">
                • Building a high-performance KV Store
              </Text>
              <Text fontSize="ll" color="gray.600">
                • Developing Kridavyuha
              </Text>
            </VStack>
          </Box>

          {/* Social Links */}
          <Box>
            <HStack spacing={6} justify="center">
              <Link href="https://www.linkedin.com/in/rithvik-reddy-9b495a198/" isExternal>
                <Icon
                  as={FaLinkedin}
                  w={8}
                  h={8}
                  color="blue.600"
                  _hover={{ transform: 'scale(1.1)', color: 'blue.500' }}
                  transition="all 0.3s ease"
                />
              </Link>
              <Link href="https://twitter.com/your-handle" isExternal>
                <Icon
                  as={FaTwitter}
                  w={8}
                  h={8}
                  color="blue.400"
                  _hover={{ transform: 'scale(1.1)', color: 'blue.300' }}
                  transition="all 0.3s ease"
                />
              </Link>
              <Link href="https://github.com/Rithvik89" isExternal>
                <Icon
                  as={FaGithub}
                  w={8}
                  h={8}
                  color="gray.700"
                  _hover={{ transform: 'scale(1.1)', color: 'gray.600' }}
                  transition="all 0.3s ease"
                />
              </Link>
            </HStack>
          </Box>

          <Divider my={8} />

          {/* Latest Blogs Section */}
          <Box>
            <LatestBlogs />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 