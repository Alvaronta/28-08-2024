import { Heading, Text } from "@chakra-ui/react";
import Container from "../components/layout/container/container";

export default function Error500({ message }) {
  return (
    <Container marginTop={"30px"}>
      <Heading textAlign={"center"}>500</Heading>
      <Text textAlign={"center"} fontWeight={"20px"}>
        El servidor tuvo un error.
      </Text>
    </Container>
  );
}
