import Container from "../../components/layout/container/container";
import RelayEnvironment from "../../graphql/environment";
import EventDialog from "../../components/dashboard/events/event-dialog";
import SignDialog from "../../components/dashboard/events/sign-dialog";
import EventList from "../../components/dashboard/events/event-list";
import { Heading, Button, Spinner, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { QueryRenderer } from "react-relay";
import { GetEvents } from "../../graphql/queries";
import { useSession } from "../../contexts/session";
import { useState } from "react";

function EventsWithData({ events }) {
  const { isLogged } = useSession();
  const [sign, setSign] = useState(null);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={"20px"}>
        <Heading>Lista de eventos</Heading>
        <Flex gap={2}>
          <Button as={Link} to="/eventos/ganadores">Ver ganadores</Button>
          {isLogged() && (
            <Button onClick={() => setCreating(true)}>Añadir evento</Button>
          )}
        </Flex>
      </Flex>

      <EventDialog
        creating={creating}
        setCreating={setCreating}
        editing={editing}
        setEditing={setEditing}
      />

      <SignDialog
        sign={sign}
        setSign={setSign}
      />

      <EventList events={events} onSelect={isLogged() ? setEditing : null} clickEvent={setSign} isLogged={isLogged()} />
    </>
  );
}

export default function Events() {
  return (
    <Container marginTop={"20px"} padding={"30px"}>
      <QueryRenderer
        environment={RelayEnvironment}
        query={GetEvents}
        render={({ props }) => {
          const events = props?.getEvents;
          if (!events) return <Spinner />;
          else return <EventsWithData events={events} />;
        }}
      />
    </Container>
  );
}
