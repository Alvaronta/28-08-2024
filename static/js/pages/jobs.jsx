import Container from "../components/layout/container/container";
import { Heading, Button, Spinner, Flex } from "@chakra-ui/react";
import { useState } from "react";
import JobDialog from "../components/dashboard/jobs/job-dialog";
import JobReq from "../components/dashboard/jobs/job-requirements";
import JobForm from "../components/dashboard/jobs/job-form";
import JobList from "../components/dashboard/jobs/job-list";
import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../graphql/environment";
import { GetJobs } from "../graphql/queries";
import { useSession } from "../contexts/session";

function JobsWithData({ jobs }) {
  const { isLogged } = useSession();
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);
  const [join, setJoin] = useState(null);
  const [accept, setAccept] = useState(null);

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={"20px"}>
        <Heading>Lista de postulaciones</Heading>
        {isLogged() && (
          <Button onClick={() => setCreating(true)}>Crear postulacion</Button>
        )}
      </Flex>

      <JobForm
        accept={accept}
        setAccept={setAccept}
      />

      <JobReq
        join={join}
        setJoin={setJoin}
        setAccept={setAccept}
      />

      <JobDialog
        creating={creating}
        setCreating={setCreating}
        editing={editing}
        setEditing={setEditing}
      />

      <JobList jobs={jobs} onSelect={isLogged() ? setEditing : null} logged={isLogged()} onJoin={setJoin} />
    </>
  );
}

export default function Jobs() {
  return (
    <Container marginTop={"20px"} padding={"30px"}>
      <QueryRenderer
        environment={RelayEnvironment}
        query={GetJobs}
        render={({ props }) => {
          const jobs = props?.getJobs;
          if (!jobs) return <Spinner />;
          else return <JobsWithData jobs={jobs} />;
        }}
      />
    </Container>
  );
}
