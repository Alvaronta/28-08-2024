import { Box, Button, chakra, Flex, Image, Text, Badge, Link } from "@chakra-ui/react";
import { BsTwitch, BsYoutube, BsPeopleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

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

export default function EventList({ events, onSelect, clickEvent }) {
  return events.map(({ _id, thumbnail, date, url, name, participation, slug }, index) => {
    const platform = getPlatform(url);

    return (
      <Box
        padding={"20px 30px"}
        width={"100%"}
        margin={"10px 0"}
        transition={"70ms all ease-in-out"}
        _hover={{
          backgroundColor: "#fff1",
          cursor: "pointer",
          transform: "scale(1.01)",
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
              width={"155px"}
              objectFit={"contain"}
              src={thumbnail}
              alt={"Event thumbnail"}
            />

            <Box marginLeft={"10px"}>
              {!slug ?
                <Text fontSize={"24px"} fontWeight={"bold"}>
                  {name}
                </Text> :
                <Link href={`/noticias/${slug}`} target="_blank" fontSize={"24px"} fontWeight={"bold"} display="flex" alignItems="center" gap={1}>{name} <FiExternalLink size={15}></FiExternalLink> </Link>
              }
              {url ? <Badge colorScheme='purple'>Finalizado</Badge> : participation ? <Badge colorScheme='green'>Inscripciones Abiertas</Badge> : <Badge colorScheme='red'>Inscripciones Cerradas</Badge>}
              <Text fontSize={"15px"} color={"gray.400"}>
                {date}
              </Text>
            </Box>
          </Flex>

          {
            url ?
              <Button
                flexShrink={0}
                colorScheme={platform?.color}
                leftIcon={platform?.icon}
                as={chakra.a}
                href={url}
                target={"_blank"}
              >
                Ver en {platform?.name}
              </Button>
              : participation ?
                <Button onClick={() => clickEvent?.(_id)} colorScheme='green'>
                  Participar
                </Button>
                : null
          }
          {
            !url ?
              <Button ml={2} href={`/eventos/${_id}/participantes`} as={Link}><BsPeopleFill></BsPeopleFill></Button>
              : null
          }
        </Flex>
      </Box>
    );
  });
}