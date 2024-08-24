import { useState } from "react";
import { useSession } from "../../contexts/session";
import useCountdown from "../../hooks/useCountdown";

import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Container from "../../components/layout/container/container";
import Markdown from "../../components/ui/markdown/mardown";

import { QueryRenderer } from "react-relay";
import { GetSorteo } from "../../graphql/queries";
import RelayEnvironment from "../../graphql/environment";
import getEndpoint from "../../utils/endpoint";

import Countdown from "../../components/ui/countdown/countdown";
import SorteoAnimation from "../../components/overlay/sorteo-animation/sorteo-animation";
import fireworks from "../../utils/fireworks";
import SorteoDeleteDialog from "../../components/overlay/sorteo-delete-dialog/sorteo-delete-dialog";

function NotCurrentComponent() {
  return (
    <>
      <Heading fontSize={"6xl"}>Sorteo inexistente</Heading>
      <Text fontSize={"xl"} margin={"10px 0"}>
        Es posible que ya haya teminado.
      </Text>
    </>
  );
}

function SorteoFinished({ participants, sorteo }) {
  const username = localStorage.getItem("twitter_sorteo_username");
  const isWinner = username?.toLowerCase() === sorteo.winner?.toLowerCase();
  fireworks();

  return (
    <>
      <Heading fontSize={"6xl"}>
        {isWinner ? "Felicidades " + username : "Mejor suerte para la próxima"}
      </Heading>

      {isWinner ? (
        <Text>Eres el ganador del sorteo</Text>
      ) : (
        <Text>El ganador del sorteo es {sorteo.winner}</Text>
      )}

      <Text
        margin={"20px 0"}
        as={Link}
        to={"/sorteos/" + sorteo._id + "/participantes"}
        display={"block"}
      >
        Gracias a los demás {participants} participantes
      </Text>
    </>
  );
}

function SorteoComponent({ participants, sorteo }) {
  const { title, description, endIn, tweet, _id } = sorteo;

  const countdown = useCountdown(endIn);
  const [joining, setJoining] = useState(false);

  async function join() {
    if (joining) {
      return;
    } else {
      setJoining(true);
    }

    const req = await fetch(getEndpoint("/sorteo/join"), {
      method: "POST",
    });
    const { url, secret_token } = await req.json();

    localStorage.setItem("oauth_session_token", secret_token);
    localStorage.setItem("sorteo_id", _id);
    window.location.href = url;
  }

  const tweetParts = tweet.split("/");
  const tweetId = tweetParts[tweetParts.length - 1];

  if (countdown.finished) {
    return <SorteoAnimation id={_id} />;
  }

  return (
    <>
      <Heading fontSize={"6xl"}>{title}</Heading>
      <Markdown content={description} />

      <Box bg={"red"} maxWidth={"400px"} margin={"20px auto"}>
        <TwitterTweetEmbed tweetId={tweetId} />
      </Box>

      <Flex justifyContent={"center"} margin={"20px 0"}>
        <Box>
          <Text fontSize={"18px"} marginBottom={"3px"}>
            El sorteo termina en:
          </Text>
          <Countdown countdown={countdown} />
        </Box>
      </Flex>

      <Text
        margin={"10px 0"}
        as={Link}
        to={"/sorteos/" + _id + "/participantes"}
        display={"block"}
      >
        Hay {participants} participantes
      </Text>

      {!countdown.finished && (
        <Button onClick={join} disabled={joining}>
          {joining ? "Por favor, espere" : "Retwittear"}
        </Button>
      )}
    </>
  );
}

function SorteoRenderer({ props }) {
  const [firstRender, setFirstRender] = useState(true);

  const { getSorteo } = props;
  if (getSorteo) {
    if (getSorteo.sorteo.winner && firstRender) {
      return <SorteoFinished {...getSorteo} />;
    } else {
      if (firstRender) {
        setFirstRender(false);
      }
      return <SorteoComponent {...getSorteo} />;
    }
  } else {
    return <NotCurrentComponent />;
  }
}

export default function Sorteo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const { isLogged } = useSession();

  if (!params?.id) {
    return <></>;
  }

  return (
    <>
      <SorteoDeleteDialog
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        _id={params.id}
      />

      <Flex
        width={"100%"}
        height={"calc(100vh - 100px)"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={"30px"}
      >
        <Container>
          <Flex justifyContent={"flex-end"}>
            {isLogged() && (
              <>
                <Button
                  onClick={onOpen}
                  colorScheme={"red"}
                  marginRight={"5px"}
                >
                  Eliminar
                </Button>

                <Button as={Link} to={"/sorteos/" + params.id + "/edit"}>
                  Editar
                </Button>
              </>
            )}
          </Flex>
          <Box textAlign={"center"}>
            <QueryRenderer
              environment={RelayEnvironment}
              query={GetSorteo}
              variables={{
                sorteoId: params?.id,
              }}
              render={({ props }) => {
                if (props) {
                  return <SorteoRenderer props={props} />;
                } else {
                  return <Spinner />;
                }
              }}
            />
          </Box>
        </Container>
      </Flex>
    </>
  );
}
