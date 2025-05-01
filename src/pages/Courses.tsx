import { Box, Container, VStack, Heading, Text, Link, Divider } from '@chakra-ui/react'

const Courses = () => {
  return (
    <Box bg="white">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="xl" mb={6}>
              Curated Courses
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              Excellent resources for learning various technologies
            </Text>
            
            <Divider mb={6} />
            
            <VStack align="start" spacing={6}>
              <Box>
                <Link 
                  href="https://15445.courses.cs.cmu.edu/fall2024/" 
                  color="blue.500" 
                  isExternal
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ textDecoration: 'underline' }}
                >
                  CMU 15-445/645: Database Systems
                </Link>
                <Text fontSize="md" color="gray.600" mt={2}>
                  A comprehensive course covering database design and implementation, including data models, storage architectures, transaction processing, and distributed systems.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Courses 