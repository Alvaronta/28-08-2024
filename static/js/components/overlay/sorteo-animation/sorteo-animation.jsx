import { Box, Text } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../../graphql/environment";
import { GetSorteo, GetSorteoParticipants } from "../../../graphql/queries";

import { randomArrayElement } from "../../../utils/random";
import { useState } from "react";
import { useEffect } from "react";
import RenderWithDelay from "../../utils/render-with-delay/render-with-delay";
import fireworks from "../../../utils/fireworks";

function createNameArrary(winner, dummyList, padding) {
  const result = [];

  for (let i = 0; i < 10; i++) {
    result.push(randomArrayElement(dummyList).username);
  }

  result.push(winner);

  for (let i = 0; i < padding; i++) {
    result.push(randomArrayElement(dummyList).username);
  }

  return result;
}

function SorteoAnimationPop({ participants, winner }) {
  const words = createNameArrary(winner, participants, 50);
  const [selected, setSelected] = useState(words.length);

  const size = 37;
  const start = 4 * size;
  const end = (words.length - 1) * size;

  const { scroll } = useSpring({
    scroll: end,
    from: { scroll: start },
    reset: false,
    config: {
      duration: 8000,
      decay: 800,
      friction: 4000,
    },
    reverse: true,
    delay: 0,
    onRest: () => {
      fireworks();
    },
  });

  useEffect(() => {
    setTimeout(() => {
      console.log(selected);
      if (selected > 10) {
        setSelected(selected - 1);
      }
    }, 140);
  }, [selected, words.length]);

  return (
    <Box
      as={animated.div}
      maxHeight={"80vh"}
      overflowY={"hidden"}
      overflowX={"hidden"}
      width={"100%"}
      scrollTop={scroll}
    >
      {words.map((value, index) => (
        <Text
          key={index}
          fontSize={"25px"}
          color={selected === index ? "#fff" : "#888"}
          fontWeight={selected === index ? "bold" : "normal"}
          transform={selected === index ? "scale(2)" : "none"}
          transition={"all 140ms ease-in-out"}
        >
          {value}
        </Text>
      ))}
    </Box>
  );
}

export default function SorteoAnimation({ id }) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={GetSorteoParticipants}
      variables={{
        page: 0,
        sorteoId: id,
      }}
      render={({ error, props }) => {
        if (props) {
          const participants = props.getSorteoParticipants;

          return (
            <RenderWithDelay delay={1000}>
              <QueryRenderer
                environment={RelayEnvironment}
                query={GetSorteo}
                variables={{
                  sorteoId: id,
                }}
                fetchPolicy={"network-only"}
                render={({ props, retry }) => {
                  if (props) {
                    const winner = props.getSorteo.sorteo?.winner;

                    if (!winner) {
                      setTimeout(() => {
                        retry();
                      }, 1000);
                    } else {
                      return (
                        <SorteoAnimationPop
                          participants={participants}
                          winner={winner}
                        />
                      );
                    }
                  }
                }}
              />
            </RenderWithDelay>
          );
        }
      }}
    />
  );
}
