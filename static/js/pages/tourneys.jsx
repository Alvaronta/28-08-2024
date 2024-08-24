import Container from "../components/layout/container/container";
import { Heading, Button, Spinner, Flex } from "@chakra-ui/react";
import { useState } from "react";
import TourneyDialog from "../components/dashboard/tourneys/tourney-dialog";
import TourneyList from "../components/dashboard/tourneys/tourney-list";
import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../graphql/environment";
import { GetTourneys } from "../graphql/queries";
import { useSession } from "../contexts/session";

function TourneysWithData({ tourneys }) {
  const { isLogged } = useSession();
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={"20px"}>
        <Heading>Lista de torneos</Heading>
        {isLogged() && (
          <Button onClick={() => setCreating(true)}>Crear torneos</Button>
        )}
      </Flex>

      <TourneyDialog
        creating={creating}
        setCreating={setCreating}
        editing={editing}
        setEditing={setEditing}
      />

      <TourneyList tourneys={tourneys} onSelect={isLogged() ? setEditing : null} />
    </>
  );
}

export default function Tourneys() {
  return (
    <Container marginTop={"20px"} padding={"30px"}>
      <QueryRenderer
        environment={RelayEnvironment}
        query={GetTourneys}
        render={({ props }) => {
          const tourneys = props?.getTourneys;
          if (!tourneys) return <Spinner />;
          else return <TourneysWithData tourneys={tourneys} />;
        }}
      />
    </Container>
  );
}
