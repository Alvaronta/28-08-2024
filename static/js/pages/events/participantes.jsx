import { Box, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/layout/container/container";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";

import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../graphql/environment";
import { GetPlayers } from "../../graphql/queries";

function Participants({ participants, page, id }) {
  return (
    <List spacing={1} marginTop={"10px"}>
      {participants.map((value, index) => {
        return (
          <ListItem key={index}>
            {
              value.premium ? <ListIcon mb="1px" as={MdCheckCircle} color="green.500" /> : <ListIcon as={MdRemoveCircle} color="red.500" />
            }
            <Text mr={3} display="inline">{value.displayName}</Text>
            <Text display="inline" color="whiteAlpha.600">{value.discordId}</Text>
          </ListItem>
        );
      })}
      <ListItem>
        <Link to={"/eventos/" + id + "/participantes/" + (page + 1)}>
          Siguiente pagina.
        </Link>
      </ListItem>
    </List>
  );
}

export default function EventParticipants() {
  const params = useParams("page", "id");
  const page = params?.page ? parseInt(params.page) : 1;

  if (!params.id) return <></>;

  return (
    <Container marginTop={"20px"}>
      <Box width={"80%"} margin={"30px auto"}>
        <Heading>Lista de participantes</Heading>
        <QueryRenderer
          environment={RelayEnvironment}
          query={GetPlayers}
          variables={{
            page: page - 1,
            eventId: params.id,
          }}
          render={({ error, props }) => {
            if (props) {
              return (
                <Participants
                  page={page}
                  participants={props.getPlayers}
                  id={params.id}
                />
              );
            }
          }}
        />
      </Box>
    </Container>
  );
}
