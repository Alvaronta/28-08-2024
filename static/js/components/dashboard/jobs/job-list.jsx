import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

export default function JobList({ jobs, onSelect, onJoin, logged }) {
  return jobs.map(({ _id, thumbnail, title, description, requirements, questions, open }, index) => {

    return (
      <Box
        padding={"20px 50px"}
        width={"100%"}
        margin={"10px 0"}
        transition={"70ms all ease-in-out"}
        _hover={{
          backgroundColor: "#fff1",
          cursor: "pointer",
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
              minWidth={"160px"}
              objectFit={"contain"}
              src={thumbnail}
              alt={"Event thumbnail"}
            />

            <Box marginLeft={"10px"}>
              <Text fontSize={"24px"} fontWeight={"bold"}>
                <Flex alignItems={"center"} gap={2}>
                  {title}
                </Flex>
              </Text>
              {open ? <Badge colorScheme='green'>disponible</Badge> : <Badge colorScheme='red'>no disponible</Badge>}
              {description ?
                <Text fontSize={"15px"} color={"gray.400"}>
                  <Flex alignItems={"center"} gap={2}>
                    {description}
                  </Flex>
                </Text> : null}
            </Box>

          </Flex>
          <Flex gap='5px'>
            {logged ?
              <Button ml={2} color='gray.300' to={`/postulaciones/${_id}/1`} as={Link}>
                <BsFillPeopleFill></BsFillPeopleFill>
              </Button> : null}
            {open ?
              <Button onClick={() => onJoin({ requirements, questions })} colorScheme='green'>
                Postularme
              </Button> : null}
          </Flex>
        </Flex>
      </Box>
    );
  });
}