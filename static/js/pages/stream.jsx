import Container from "../components/layout/container/container";

import { chakra, Flex, Heading, Image, Link } from "@chakra-ui/react";

function ToolItem({ thumbnail, link }) {
  return (
    <Link
      as={chakra.a}
      href={link}
      margin={"5px"}
      target={"_blank"}
      height={"100%"}
      borderRadius={"8px"}
    >
      <Image
        width={"100%"}
        height={"100%"}
        borderRadius={"8px"}
        src={thumbnail}
      />
    </Link>
  );
}

export default function Stream() {
  return (
    <>
      <Container
        marginTop={"100px"}
        marginBottom={"30px"}
        bg={"#161616"}
        padding={"10px"}
      >
        <Heading margin={"20px 0"} textAlign={"center"}>
          Herramientas de Stream
        </Heading>

        <Flex>
          <ToolItem thumbnail={"/assets/img/ruleta-1.png"} link={"/ruleta/1"} />
          <ToolItem thumbnail={"/assets/img/ruleta-2.png"} link={"/ruleta/2"} />
        </Flex>
      </Container>
    </>
  );
}
