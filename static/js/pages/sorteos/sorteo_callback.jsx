import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/layout/container/container";
import getEndpoint from "../../utils/endpoint";

const JoinedState = {
  LOADING: 0,
  SUCCESS: 1,
  ALREADY: 2,
  EXPIRED: 3,
};

function getDescForState(state) {
  if (state === JoinedState.LOADING) {
    return {
      title: "Verificando datos",
      subtitle: "Espere un momento por favor",
    };
  } else if (state === JoinedState.SUCCESS) {
    return {
      title: "Estas participando",
      subtitle: "Hemos colocado tu nombre en nuestra lista",
    };
  } else if (state === JoinedState.ALREADY) {
    return {
      title: "Error",
      subtitle: "Ya te encuentras participando",
    };
  } else if (state === JoinedState.EXPIRED) {
    return {
      title: "Error",
      subtitle: "La sesion ha expirado, vuelve a intentarlo",
    };
  }
}

export default function SorteoCallback() {
  const [searchParams] = useSearchParams();
  const [joinStatus, setJoinStatus] = useState(JoinedState.LOADING);
  const state = getDescForState(joinStatus);

  const sorteoId = localStorage.getItem("sorteo_id");
  const secret_token = localStorage.getItem("oauth_session_token");
  const oauth_token = searchParams.get("oauth_token");
  const oauth_verifier = searchParams.get("oauth_verifier");

  useEffect(() => {
    async function confirm() {
      const req = await fetch(getEndpoint("/sorteo/callback"), {
        method: "POST",
        body: JSON.stringify({
          oauth_token,
          oauth_verifier,
          secret_token,
          sorteoId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { joined, username } = await req.json();
      localStorage.setItem("twitter_sorteo_username", username);
      localStorage.removeItem("oauth_session_token");
      localStorage.removeItem("sorteo_id");
      setJoinStatus(joined ? JoinedState.SUCCESS : JoinedState.ALREADY);
    }

    if (secret_token) {
      confirm();
    } else {
      setJoinStatus(JoinedState.EXPIRED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      width={"100%"}
      height={"calc(100vh - 100px)"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container>
        <Box textAlign={"center"}>
          <Heading fontSize={"6xl"}>{state.title}</Heading>
          <Text fontSize={"xl"} margin={"10px 0"}>
            {state.subtitle}
          </Text>
        </Box>
      </Container>
    </Flex>
  );
}
