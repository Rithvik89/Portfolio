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
  Badge,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaSearch, FaBook, FaFileAlt } from 'react-icons/fa'

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  useEffect(() => {
    document.title = 'Library | Rithvik Reddy'
  }, [])

  const items = [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      type: 'book',
      tags: ['databases', 'distributed-systems', 'architecture'],
      description: 'A comprehensive guide to building reliable, scalable, and maintainable applications.',
      link: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
      date: 'March 2024'
    },
    {
      title: 'MapReduce: Simplified Data Processing on Large Clusters',
      author: 'Jeffrey Dean and Sanjay Ghemawat',
      type: 'paper',
      tags: ['distributed-systems', 'big-data', 'parallel-computing'],
      description: 'The seminal paper introducing MapReduce, a programming model for processing large datasets across distributed clusters.',
      link: 'https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf',
      date: 'February 2024'
    },
    {
      title: 'Database Internals: A Deep Dive into How Distributed Data Systems Work',
      author: 'Alex Petrov',
      type: 'book',
      tags: ['databases', 'distributed-systems', 'storage-engines'],
      description: 'An in-depth exploration of database storage engines, distributed systems, and the internals of modern databases.',
      link: 'https://www.amazon.com/Database-Internals-Deep-Distributed-Systems/dp/1492040347',
      date: 'March 2024'
    }
  ]

  const allTags = Array.from(new Set(items.flatMap(item => item.tags)))

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === 'all' || item.tags.includes(selectedTag)
    const matchesType = selectedType === 'all' || item.type === selectedType
    return matchesSearch && matchesTag && matchesType
  })

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Library
          </Heading>
          <Text fontSize="xl" color="gray.600">
            A curated collection of papers, books, and resources I've found valuable
          </Text>
        </Box>

        <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            maxW={{ base: 'full', md: '200px' }}
          >
            <option value="all">All Types</option>
            <option value="book">Books</option>
            <option value="paper">Papers</option>
          </Select>

          <Select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            maxW={{ base: 'full', md: '200px' }}
          >
            <option value="all">All Tags</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
              </option>
            ))}
          </Select>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {filteredItems.map((item, index) => (
            <Box
              key={index}
              borderWidth={1}
              borderRadius="lg"
              p={6}
              _hover={{ shadow: 'lg' }}
              transition="all 0.3s"
            >
              <HStack spacing={2} mb={3}>
                <Icon
                  as={item.type === 'book' ? FaBook : FaFileAlt}
                  color={item.type === 'book' ? 'blue.500' : 'green.500'}
                />
                <Badge colorScheme={item.type === 'book' ? 'blue' : 'green'}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </Badge>
                <Text fontSize="sm" color="gray.500">
                  {item.date}
                </Text>
              </HStack>

              <Link href={item.link} isExternal>
                <Heading as="h3" size="md" mb={2}>
                  {item.title}
                </Heading>
              </Link>

              <Text color="gray.600" mb={4}>
                {item.description}
              </Text>

              <Text fontSize="sm" color="gray.500" mb={3}>
                By {item.author}
              </Text>

              <HStack spacing={2}>
                {item.tags.map(tag => (
                  <Tag
                    key={tag}
                    size="sm"
                    colorScheme="blue"
                    variant="subtle"
                    cursor="pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag.replace('-', ' ')}
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

export default Library 