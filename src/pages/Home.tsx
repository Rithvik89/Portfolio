import { Box, Container, VStack, Heading, Text, Divider } from '@chakra-ui/react'
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
            <Text fontSize="lg" color="gray.600" mb={4} >
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

          <Divider/>

          {/* Latest Blogs Section */}
          <Box>
            <LatestBlogs />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home ;