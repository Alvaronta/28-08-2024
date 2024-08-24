import { Heading, Text } from "@chakra-ui/react";
import Container from "../components/layout/container/container";

export default function Proximamente() {
  return (
    <>
      <Container marginTop={"30px"} bg={"#161616AA"}>
        <Heading>Zona en construcción</Heading>
        <Text>
          Próximamente aquí abrá algo, mientras disfrutá las particulas.
        </Text>
      </Container>
    </>
  );
}
