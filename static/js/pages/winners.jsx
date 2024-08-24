import Container from "../components/layout/container/container";
import RelayEnvironment from "../graphql/environment";
import EventWinnerDialog from "../components/dashboard/winners/winner-dialog";
import EventWinnerList from "../components/dashboard/winners/winner-list";
import { Link } from "react-router-dom";
import { Heading, Button, Spinner, Flex } from "@chakra-ui/react";
import { QueryRenderer } from "react-relay";
import { GetEventWinners } from "../graphql/queries";
import { useSession } from "../contexts/session";
import { useState } from "react";

function EventWinnersWithData({ winners, eventList }) {
  const { isLogged } = useSession();
  const [events, setEvents] = useState(eventList);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={"20px"}>
        <Heading>Lista de ganadores en eventos</Heading>
        <Flex gap={2}>
          <Button as={Link} to="/eventos">Ver eventos</Button>
          {isLogged() && (
            <Button onClick={() => setCreating(true)}>Añadir ganador</Button>
          )}
        </Flex>
      </Flex>

      <EventWinnerDialog
        events={events}
        setEvents={setEvents}
        creating={creating}
        setCreating={setCreating}
        editing={editing}
        setEditing={setEditing}
      />

      <EventWinnerList winners={winners} events={events} onSelect={isLogged() ? setEditing : null} />
    </>
  );
}

export default function EventWinners() {
  return (
    <Container marginTop={"20px"} padding={"30px"}>
      <QueryRenderer
        environment={RelayEnvironment}
        query={GetEventWinners}
        render={({ props }) => {
          const winners = props?.getEventWinners;
          if (!winners) return <Spinner />;
          const update = winners.reduce((a, { eventList }) => ({ ...a, ...eventList.reduce((ae, { eventObj: { _id, ...rest } }) => ({ ...ae, [_id]: rest }), {}) }), {});
          const object = winners.map(v => ({ ...v, eventList: v.eventList.map(e => ({ eventId: e.eventId })) }));
          return <EventWinnersWithData winners={object} eventList={update}/>;
        }}
      />
    </Container>
  );
}
