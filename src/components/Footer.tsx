import { Box, Container, Text, HStack, Link, Icon, VStack, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.50" py={8} mt={8}>
      <Container maxW="container.xl">
        <VStack spacing={6}>
          <HStack spacing={6}>
            <Link href="https://github.com/rithvik89" isExternal>
              <Icon as={FaGithub} w={6} h={6} color="gray.600" _hover={{ color: "gray.800" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/rithvik-reddy-9b495a198/" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} color="gray.600" _hover={{ color: "gray.800" }} />
            </Link>
            <Link href="https://twitter.com/rithvik89" isExternal>
              <Icon as={FaTwitter} w={6} h={6} color="gray.600" _hover={{ color: "gray.800" }} />
            </Link>
          </HStack>
          
          <Divider borderColor="gray.200" />
          
          <Text color="gray.600" fontSize="sm">
            © {currentYear} Rithvik Reddy. All rights reserved.
          </Text>
          
          <Text color="gray.500" fontSize="xs">
            Built with React, TypeScript, and Chakra UI
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer; 