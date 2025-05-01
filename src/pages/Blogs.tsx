import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Tag,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Flex,
  Link,
  Icon,
  Image,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import postgresWALImage from '../assets/images/postgres-wal.png'
import redisArchitectureImage from '../assets/images/redis-architecture.svg'

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    document.title = 'Blogs | Rithvik Reddy'
  }, [])

  const blogs = [
    {
      title: 'Understanding WAL in PostgreSQL',
      excerpt: 'A deep dive into Write-Ahead Logging in PostgreSQL and its importance in database reliability...',
      image: postgresWALImage,
      date: 'December 14, 2024',
      category: 'Database',
      readTime: '5 min read',
      link: 'https://www.linkedin.com/pulse/understanding-wal-postgres-rithvik-reddy-hoyrc/?trackingId=%2Bo05TrTcakMZqpRFrpoZZQ%3D%3D'
    },
    {
      title: 'Redis Single-Threaded Architecture: The Key to Its Lightning-Fast Performance',
      excerpt: 'An in-depth exploration of how Redis leverages its unique single-threaded architecture, non-blocking I/O, and event-driven model to achieve remarkable performance of 100,000+ operations per second...',
      image: redisArchitectureImage,
      date: 'October 25, 2024',
      category: 'Redis',
      readTime: '7 min read',
      link: 'https://www.linkedin.com/pulse/redis-single-threaded-architecture-key-its-rithvik-reddy-5hpje/?trackingId=OCX%2B3LgGha20AICwWRj0gQ%3D%3D'
    }
  ]

  const allCategories = Array.from(new Set(blogs.map(blog => blog.category)))

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Blog Posts
          </Heading>
          <Text fontSize="xl" color="gray.600">
            All my thoughts, insights, and experiences in software development
          </Text>
        </Box>

        <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
          <InputGroup flex={1}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            maxW={{ base: 'full', md: '200px' }}
          >
            <option value="all">All Categories</option>
            {allCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredBlogs.map((blog, index) => (
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
                  <Text fontSize="sm" color="gray.500">
                    {blog.readTime}
                  </Text>
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

export default Blogs 