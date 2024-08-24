import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Container from "../../components/layout/container/container";
import Countdown from "../../components/ui/countdown/countdown";
import useCountdown from "../../hooks/useCountdown";

import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../graphql/environment";
import { GetSorteos } from "../../graphql/queries";
import { useSession } from "../../contexts/session";

function SorteoItem({ title, to, image, endIn, description }) {
  const countdown = useCountdown(endIn);
  return (
    <Flex
      as={Link}
      to={to}
      width={"100%"}
      height={"100%"}
      bgColor={"white"}
      bg={`url(${image})`}
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      borderRadius={"7px"}
      transition={"all 200ms ease-in-out"}
      cursor={"pointer"}
      color={"white"}
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      <Box padding={"10px"}>
        <Heading fontSize={"5xl"} textShadow={"5px 4px 0px rgba(0,0,0,1)"}>
          {title}
        </Heading>
        <Text fontSize={"2xl"} textShadow={"2px 2px 0px rgba(0,0,0,1)"}>
          {description}
        </Text>
        <Box marginTop={"10px"}>
          <Countdown color={"black"} countdown={countdown} />
        </Box>
      </Box>
    </Flex>
  );
}

function SorteoContainer({ title, description, endIn, thumbnail, to }) {
  const [lessThan950px] = useMediaQuery("screen and (max-width: 950px)");

  return (
    <Container marginBottom={"20px"}>
      <Grid
        h="300px"
        templateRows={"repeat(" + (lessThan950px ? "1" : "1") + ", 1fr)"}
        templateColumns="repeat(1, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <SorteoItem
            title={title}
            description={description}
            to={to}
            endIn={endIn}
            image={thumbnail}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default function Sorteos() {
  const { isLogged } = useSession();

  return (
    <>
      <Container marginTop={"20px"} marginBottom={"20px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box padding={"20px"}>
            <Heading>Sorteos</Heading>
            <Text></Text>
          </Box>
          <Box padding={"20px"}>
            {isLogged() && (
              <Button as={Link} to={"/sorteos/new"}>
                Crear sorteo
              </Button>
            )}
          </Box>
        </Flex>
      </Container>

      <QueryRenderer
        environment={RelayEnvironment}
        query={GetSorteos}
        render={({ props }) => {
          if (props?.getSorteos) {
            return props.getSorteos
              .filter((sorteo) => isLogged() || sorteo.enabled)
              .map(({ title, description, endIn, thumbnail, _id }, index) => {
                return (
                  <SorteoContainer
                    key={index}
                    title={title}
                    description={description}
                    to={"/sorteos/" + _id}
                    endIn={endIn}
                    thumbnail={thumbnail}
                  />
                );
              });
          }
        }}
      />
    </>
  );
}
