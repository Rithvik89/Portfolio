import { Box, Container, VStack, Heading, Text, Divider, Link } from '@chakra-ui/react'
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
            <Text fontSize="lg" color="gray.600" mb={4}>
              On the side, I work on a couple of exciting projects:
            </Text>
            <VStack align="start" spacing={3} mb={6}>
              <Text fontSize="lg" color="gray.600">
                • <Link href="https://github.com/Rithvik89/KVStore" color="blue.500" isExternal>KV Store</Link> – A key-value store designed to be configurable between high consistency and high availability, depending on the use case.
              </Text>
              <Text fontSize="lg" color="gray.600">
                • <Link href="https://github.com/kridavyuha" color="blue.500" isExternal>Krida-Vyuha</Link> – An experimental concept aiming to capture the essence of watching cricket through interactive, gamified experiences.
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