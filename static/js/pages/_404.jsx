import { Heading, Text } from "@chakra-ui/react";
import Container from "../components/layout/container/container";

export default function Error404() {
  return (
    <Container marginTop={"30px"}>
      <Heading textAlign={"center"}>404</Heading>
      <Text textAlign={"center"} fontWeight={"20px"}>
        Esta página no fue encontrada
      </Text>
    </Container>
  );
}
