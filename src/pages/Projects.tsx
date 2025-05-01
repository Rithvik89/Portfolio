import { useEffect } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Tag, Link, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Rithvik Reddy'
  }, [])

  const projects = [
    {
      title: 'KVStore',
      description: 'A distributed key-value store implementation in Go, featuring consistent hashing, leader election, and fault tolerance mechanisms.',
      tags: ['Golang', 'Distributed Systems', 'Raft', 'Consistent Hashing'],
      github: 'https://github.com/Rithvik89/KVStore',
      status: 'Active'
    },
    {
      title: 'Kridavyuha',
      description: 'A modern fantasy sports platform with real-time updates, user statistics, and competitive leaderboards.',
      tags: ['React', 'TypeScript', 'Golang', 'PostgreSQL', 'Redis', 'WebSocket'],
      github: 'https://github.com/kridavyuha',
      status: 'Active'
    },
    {
      title: '22Yardz',
      description: 'A sports community platform enabling fans to discuss, analyze, and engage with their favorite sports and teams.',
      tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Golang', 'REST API'],
      github: 'https://github.com/yards22',
      status: 'Completed'
    }
  ]

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={6}>
            My Projects
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Here are some of the projects I've worked on. Each project represents
            a unique challenge and learning experience.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              borderWidth={1}
              borderRadius="lg"
              p={6}
              _hover={{ shadow: 'lg' }}
              transition="all 0.3s"
            >
              <HStack justify="space-between" mb={4}>
                <HStack spacing={4}>
                  <Heading as="h3" size="md">
                    {project.title}
                  </Heading>
                  {project.status === 'Active' && (
                    <Box
                      w="2"
                      h="2"
                      borderRadius="full"
                      bg="green.500"
                      _hover={{ transform: 'scale(1.2)' }}
                      transition="all 0.2s"
                    />
                  )}
                </HStack>
                <Link href={project.github} isExternal>
                  <Icon
                    as={FaGithub}
                    w={6}
                    h={6}
                    color="gray.700"
                    _hover={{ color: 'blue.500', transform: 'scale(1.1)' }}
                    transition="all 0.3s ease"
                  />
                </Link>
              </HStack>
              <Text color="gray.600" mb={4}>
                {project.description}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} colorScheme="blue" size="sm" mb={2}>
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 