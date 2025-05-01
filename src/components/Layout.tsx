import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" bg="white" position="relative" display="flex" flexDirection="column">
      <Navbar />
      <Box 
        as="main" 
        flex="1"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {children}
      </Box>
      <Box position="relative" zIndex="2">
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout 