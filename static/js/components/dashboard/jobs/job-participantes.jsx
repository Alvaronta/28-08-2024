import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Container from "../../layout/container/container";
import EntryPreview from "./entry-preview";

import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../../graphql/environment";
import { GetEntries } from "../../../graphql/queries";
import { useState } from "react";
import "./style.css"

function Participants({ participants, page, id }) {
  const [entry, setEntry] = useState(null);

  return (
    <>
      <EntryPreview
        entry={entry}
        setEntry={setEntry}
      />

      <List spacing={1} marginTop={"10px"}>
        {participants.map((value, index) => {
          return (
            <ListItem
              transition={"70ms all ease-in-out"}
              _hover={{
                backgroundColor: "#fff1",
                cursor: "pointer",
              }}
              className="entry"
              key={index}
              onClick={() => setEntry(value)}>
              <Box className="avatar">
                <Text fontWeight='bold'>{value.name[0]}</Text>
              </Box>
              <Text mr={3} display="inline" textTransform='capitalize'>{value.name}</Text>
              <Text mr={3} display="inline" color="whiteAlpha.600">{value.age} Años</Text>
              <Text mr={3} display="inline" color="whiteAlpha.600">{value.country}</Text>
            </ListItem>
          );
        })}
        <ListItem>
          <Link to={"/postulaciones/" + id + "/participantes/" + (page + 1)}>
            Siguiente pagina.
          </Link>
        </ListItem>
      </List>
    </>
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
          query={GetEntries}
          variables={{
            page: page - 1,
            jobId: params.id,
          }}
          render={({ error, props }) => {
            if (props) {
              return (
                <Participants
                  page={page}
                  participants={props.getEntries}
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