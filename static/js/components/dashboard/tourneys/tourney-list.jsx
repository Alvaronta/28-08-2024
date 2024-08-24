import { Box, Button, chakra, Flex, Image, Text } from "@chakra-ui/react";
import { BsTwitch, BsYoutube } from "react-icons/bs";

const platforms = [
  {
    color: "purple",
    domain: "twitch.tv",
    icon: <BsTwitch />,
    name: "Twitch",
  },
  {
    color: "red",
    domain: "youtube.com|youtu.be",
    icon: <BsYoutube />,
    name: "YouTube",
  }
];

function getPlatform(url) {
  return platforms.find(platform => {
    const regex = new RegExp(platform.domain);
    return regex.test(url);
  });
}

function getBadgeByIndex(index) {
  const badges = [
    "/assets/img/badges/1st.png",
    "/assets/img/badges/2nd.png",
    "/assets/img/badges/3rd.png",
  ];

  const badge = badges[index];
  if (badge) {
    return (
      <Image
        height={"32px"}
        mr={2}
        src={badge}
        alt={index + 1 + "# place badge"}
      />
    );
  } else {
    return <>{index + 1}#</>;
  }
}

function getTime(seconds) {
  const fracts = ["h", "m", "s"];
  const parts = new Date(seconds * 1000).toISOString().slice(11, 19).split(":");
  const results = [];

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    const fract = fracts[i];

    if (part[0] === "0") {
      part = part.slice(1);
    }

    if (part !== "0") {
      results.push(part + fract);
    } else {
      results.push("");
    }
  }

  return results.join(" ").trim();
}

export default function TourneyList({ tourneys, onSelect }) {
  return tourneys.map(({ _id, thumbnail, time, url, user, date }, index) => {
    const platform = getPlatform(url);
    const badge = getBadgeByIndex(index);

    return (
      <Box
        padding={"20px 50px"}
        width={"100%"}
        margin={"10px 0"}
        transition={"70ms all ease-in-out"}
        _hover={{
          backgroundColor: "#fff1",
          cursor: "pointer",
          transform: "scale(1.03)",
        }}
        key={index}
      >
        <Flex
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex
            alignItems={"center"}
            onClick={() => onSelect && onSelect(_id)}
            width={"100%"}
          >
            <Image
              height={"100px"}
              width={"175px"}
              src={thumbnail}
              alt={"Tourney thumbnail"}
            />

            <Box marginLeft={"10px"}>
              <Text fontSize={"24px"} fontWeight={"bold"}>
                <Flex alignItems={"center"}>
                  {badge} {user}
                </Flex>
              </Text>
              <Text fontSize={"15px"} color={"gray.200"}>
                {getTime(time)}
              </Text>
              <Text fontSize={"15px"} color={"gray.400"}>
                {date}
              </Text>
            </Box>
          </Flex>

          <Button
            colorScheme={platform.color}
            leftIcon={platform.icon}
            as={chakra.a}
            href={url}
            target={"_blank"}
          >
            Ver en {platform.name}
          </Button>
        </Flex>
      </Box>
    );
  });
}