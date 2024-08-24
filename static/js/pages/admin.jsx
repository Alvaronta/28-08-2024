import Container from "../components/layout/container/container";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useSession } from "../contexts/session";

import UsersTab from "../components/dashboard/users/users-tab";

export default function Admin() {
  const { isLogged } = useSession();

  if (!isLogged()) return <Navigate to={"/login"} />;

  return (
    <Container marginTop={"20px"} padding={"30px"}>
      <Heading mb={"10px"}>Panel Administrativo</Heading>
      <Tabs>
        <TabList>
          <Tab>Usuarios</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UsersTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
