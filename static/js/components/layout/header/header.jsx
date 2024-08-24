import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../../contexts/session";

export default function Header() {
  const { isLogged, user, logout } = useSession();
  const navigate = useNavigate();

  const goToAdmin = () => navigate("/admin");

  if (isLogged()) {
    return (
      <Box
        width={"100%"}
        padding={"10px 20px"}
        bg={"#F33"}
        fontSize={"18px"}
        textAlign={"center"}
      >
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Text>Cuidado {user?.displayName}, estas en modo Administrador</Text>
          <Box>
            <Button mr={2} onClick={goToAdmin}>
              Panel
            </Button>
            <Button onClick={logout}>Salir</Button>
          </Box>
        </Flex>
      </Box>
    );
  } else {
    return <></>;
  }
}