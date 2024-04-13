import { useParams } from "react-router-dom";
import { Box, Container, Heading } from "@chakra-ui/react";

const DeveloperDetail = () => {
  const { id } = useParams();

  return (
    <Box>
      <Container maxW="container.lg" py={12}>
        <Heading>Developer {id}</Heading>
      </Container>
    </Box>
  );
};

export default DeveloperDetail;