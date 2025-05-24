import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa'
import postgresWALImage from '../assets/images/postgres-wal.png'
import redisArchitectureImage from '../assets/images/redis-architecture.svg'
import databaseImage from '../assets/images/database.png'

const LatestBlogs = () => {
  const blogs = [
    {
      title: 'Transaction Isolation in Databases',
      excerpt: 'A comprehensive guide to understanding transaction isolation levels in databases, from Read Committed to Serializable, and their impact on data consistency and performance...',
      image: databaseImage,
      date: 'May 24, 2025',
      category: 'Database',
      readTime: '10 min read',
      link: 'https://www.linkedin.com/pulse/transaction-isolation-databases-rithvik-reddy-eq6nc/?trackingId=fbdjEyKNRACaUa781gz%2FHw%3D%3D',
      platform: 'linkedin'
    },
    {
      title: 'Understanding WAL in PostgreSQL',
      excerpt: 'A deep dive into Write-Ahead Logging in PostgreSQL and its importance in database reliability...',
      image: postgresWALImage,
      date: 'December 14, 2024',
      category: 'Database',
      readTime: '5 min read',
      link: 'https://www.linkedin.com/pulse/understanding-wal-postgres-rithvik-reddy-hoyrc/?trackingId=%2Bo05TrTcakMZqpRFrpoZZQ%3D%3D',
      platform: 'linkedin'
    },
    {
      title: 'Redis Single-Threaded Architecture: The Key to Its Lightning-Fast Performance',
      excerpt: 'An in-depth exploration of how Redis leverages its unique single-threaded architecture, non-blocking I/O, and event-driven model to achieve remarkable performance of 100,000+ operations per second...',
      image: redisArchitectureImage,
      date: 'October 25, 2024',
      category: 'Redis',
      readTime: '7 min read',
      link: 'https://www.linkedin.com/pulse/redis-single-threaded-architecture-key-its-rithvik-reddy-5hpje/?trackingId=OCX%2B3LgGha20AICwWRj0gQ%3D%3D',
      platform: 'linkedin'
    }
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return FaLinkedin
      case 'twitter':
        return FaTwitter
      case 'medium':
        return FaMedium
      default:
        return FaMedium
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'blue.500'
      case 'twitter':
        return 'blue.400'
      case 'medium':
        return 'green.500'
      default:
        return 'gray.500'
    }
  }

  return (
    <Container maxW="container.xl" mt={2}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest Articles & Posts
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Recent thoughts and insights on technology, development, and software engineering
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogs.map((blog, index) => (
            <Box
              key={index}
              borderWidth={1}
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
              transition="all 0.3s"
            >
              <Image
                 src={blog.image}
                 alt={blog.title}
                 height="200px"
                 width="100%"
                 objectFit="contain"
                 bg="gray.50"
                 p={4}
              />
              <Box p={6}>
                <HStack spacing={2} mb={3} justify="space-between">
                  <Tag size="sm" colorScheme="blue">
                    {blog.category}
                  </Tag>
                  <HStack spacing={2}>
                    <Icon
                      as={getPlatformIcon(blog.platform)}
                      color={getPlatformColor(blog.platform)}
                      w={4}
                      h={4}
                    />
                    <Text fontSize="sm" color="gray.500">
                      {blog.readTime}
                    </Text>
                  </HStack>
                </HStack>
                <Link
                  href={blog.link}
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <Heading as="h3" size="md" mb={2}>
                    {blog.title}
                  </Heading>
                </Link>
                <Text color="gray.600" mb={4}>
                  {blog.excerpt}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {blog.date}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default LatestBlogs 