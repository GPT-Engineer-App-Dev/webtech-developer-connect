import { Box, Container, Flex, Heading, Image, Link, Tag, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "John Smith",
    location: "New York, NY",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE2ODEzOTg0NTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["React", "Node.js", "GraphQL"],
  },
  {
    id: 2, 
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE2ODEzOTg0NTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["Python", "Django", "Machine Learning"],
  },
  {
    id: 3,
    name: "Michael Lee",
    location: "Chicago, IL", 
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE2ODEzOTg0NTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["Java", "Spring", "AWS"],
  },
];

const Developers = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={12}>
        <Heading mb={8}>Available Developers</Heading>
        <Flex direction={["column", "row"]} flexWrap="wrap">
          {developers.map((developer) => (
            <Link 
              as={RouterLink}
              to={`/developer/${developer.id}`}
              key={developer.id}
              flex={["0 0 100%", "0 0 33.33%"]}
              p={4}
            >
              <Box bg="gray.50" p={6} borderRadius="lg">
                <Image 
                  src={developer.photo} 
                  alt={developer.name}
                  w={32} 
                  h={32}
                  mx="auto"
                  borderRadius="full"
                  objectFit="cover"
                  mb={6}
                />
                <Heading size="lg" mb={2} textAlign="center">
                  {developer.name}
                </Heading>
                <Text textAlign="center" mb={4}>
                  {developer.location}
                </Text>
                <Wrap justify="center">
                  {developer.tags.map((tag) => (
                    <WrapItem key={tag}>
                      <Tag size="md" colorScheme="blue">
                        {tag}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Developers;