import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight, FaCode, FaSearch, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Flex align="center" direction={["column", "row"]}>
            <Box flex={1} mr={[0, 12]}>
              <Heading as="h1" size="2xl" mb={4}>
                Hire Top Developers. Fast.
              </Heading>
              <Text fontSize="xl" mb={8}>
                Particles connects companies with elite developers specializing in modern web technologies. Find your perfect match today.
              </Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaArrowRight />}>
                View Developers
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwwfHx8fDE3MTMwNTAyMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer coding" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Features */}
      <Box py={24}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={12}>
            Effortless Hiring for Your Web Projects
          </Heading>
          <Flex direction={["column", "row"]}>
            <Box flex={1} p={8} bg="gray.50" m={4} textAlign="center">
              <FaSearch size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Search
              </Heading>
              <Text>Easily search our curated database of talented developers. Filter by skills, experience, availability and more.</Text>
            </Box>
            <Box flex={1} p={8} bg="gray.50" m={4} textAlign="center">
              <FaCode size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Evaluate
              </Heading>
              <Text>Review developer profiles, portfolios and code samples to find the perfect fit for your project.</Text>
            </Box>
            <Box flex={1} p={8} bg="gray.50" m={4} textAlign="center">
              <FaHandshake size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Hire
              </Heading>
              <Text>Connect directly with developers and seamlessly hire them for your project. Payments and contracts all handled through Particles.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="blue.600" color="white" py={24}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={8}>
            Start Building Your Team Today
          </Heading>
          <Button colorScheme="white" size="lg">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={12}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8}>
            <Flex flex={1} direction="column">
              <Heading as="h4" size="md" mb={4}>
                Particles
              </Heading>
              <Text>&copy; 2023 Particles. All rights reserved.</Text>
            </Flex>
            <Stack flex={1} direction={["column", "row"]} spacing={8}>
              <Box>
                <Heading as="h4" size="md" mb={4}>
                  Company
                </Heading>
                <Link href="#">About</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Blog</Link>
              </Box>
              <Box>
                <Heading as="h4" size="md" mb={4}>
                  Support
                </Heading>
                <Link href="#">Contact</Link>
                <Link href="#">Help Center</Link>
                <Link href="#">FAQ</Link>
              </Box>
              <Box>
                <Heading as="h4" size="md" mb={4}>
                  Legal
                </Heading>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
