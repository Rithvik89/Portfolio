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
            <Text fontSize="lg" color="gray.600" mb={4}>
              I'm a Software Developer at VISA, with a B.Tech from NIT Warangal (2019–2023). My core interests lie in Distributed Systems and Big Data infrastructure. Lately, I've been diving into the world of Large Language Models.
            </Text>
  
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