import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/layout/container/container";
import { MdCheckCircle } from "react-icons/md";

import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../graphql/environment";
import { GetSorteoParticipants } from "../../graphql/queries";

function Participants({ participants, page, id }) {
  return (
    <List spacing={1} marginTop={"10px"}>
      {participants.map((value, index) => {
        return (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://twitter.com/" + value.username}
            >
              {value.username}
            </a>
          </ListItem>
        );
      })}
      <ListItem>
        <Link to={"/sorteos/" + id + "/participantes/" + (page + 1)}>
          Siguiente pagina.
        </Link>
      </ListItem>
    </List>
  );
}

export default function SorteoParticipants() {
  const params = useParams("page", "id");
  const page = params?.page ? parseInt(params.page) : 1;

  if (!params.id) return <></>;

  return (
    <Container marginTop={"20px"}>
      <Box width={"80%"} margin={"30px auto"}>
        <Heading>Lista de participantes</Heading>
        <QueryRenderer
          environment={RelayEnvironment}
          query={GetSorteoParticipants}
          variables={{
            page: page - 1,
            sorteoId: params.id,
          }}
          render={({ error, props }) => {
            if (props) {
              return (
                <Participants
                  page={page}
                  participants={props.getSorteoParticipants}
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
