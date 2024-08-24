import { Box, Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { QueryRenderer } from "react-relay";

import RelayEnvironment from "../../../graphql/environment";
import { GetUsers } from "../../../graphql/queries";
import UserDialog from "./users-dialog";

import UsersList from "./users-list";

function UserTabWithData({ users }) {
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <>
      <Button onClick={() => setCreating(true)}>Crear Usuario</Button>

      <UserDialog
        creating={creating}
        setCreating={setCreating}
        editing={editing}
        setEditing={setEditing}
      />

      <UsersList users={users} onSelect={setEditing} />
    </>
  );
}

export default function UsersTab() {
  return (
    <Box>
      <QueryRenderer
        environment={RelayEnvironment}
        query={GetUsers}
        render={({ props }) => {
          const users = props?.getUsers;
          if (!users) return <Spinner />;
          else return <UserTabWithData users={users} />;
        }}
      />
    </Box>
  );
}