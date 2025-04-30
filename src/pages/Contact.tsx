import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    toast({
      title: 'Message sent!',
      description: "I'll get back to you soon.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={6}>
            Get in Touch
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Have a question or want to work together? Feel free to reach out!
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          p={8}
          borderWidth={1}
          borderRadius="lg"
          bg="white"
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
            >
              Send Message
            </Button>
          </VStack>
        </Box>

        <Box>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <Icon as={FaEnvelope} w={6} h={6} color="blue.500" />
              <Text>email@example.com</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaPhone} w={6} h={6} color="blue.500" />
              <Text>+1 (555) 123-4567</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaMapMarkerAlt} w={6} h={6} color="blue.500" />
              <Text>San Francisco, CA</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Contact 