import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Library from './pages/Library'
import Blogs from './pages/Blogs'
import Courses from './pages/Courses'

const theme = extendTheme({
  fonts: {
    heading: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif',
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/library" element={<Library />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export default App
