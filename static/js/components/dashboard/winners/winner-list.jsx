import { Box, Flex, Image, Text, Link, Badge } from "@chakra-ui/react";

export default function EventWinnerList({ winners, events, onSelect }) {
  return <Flex flexDirection={'column'} marginTop={'30px'}>
    {winners.map(({ _id, displayName, eventList }, index) => {
      return (
        <Box
          padding={"10px 50px"}
          width={"100%"}
          margin={"5px 0"}
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
              gap={'40px'}
              onClick={() => onSelect && onSelect(_id)}
              width={"100%"}
            >
              <Flex justifyContent={"center"} w={'30px'}>
                <Text fontWeight={600} color={'gray.400'} fontSize={'13px'}>
                  {index + 1}
                </Text>
              </Flex>

              <Image
                height={"40px"}
                width={"40px"}
                objectFit={"contain"}
                src={`https://cravatar.eu/avatar/${displayName}/40.png`}
                alt={"Event thumbnail"}
              />

              <Box marginLeft={"10px"}>
                <Text fontSize={"24px"} fontWeight={"bold"}>
                  <Flex alignItems={"center"} gap={2}>
                    {displayName}
                  </Flex>
                </Text>
                <Flex whiteSpace='nowrap' flexWrap='wrap' color={"gray.400"} fontSize={"15px"} alignItems="center">
                  {eventList.map((v, index) =>
                    <>
                      {
                        events[v.eventId]?.url ?
                          <Link key={index} color='gray.400' href={events[v.eventId].url} target="_blank">{events[v.eventId].name}</Link> :
                          <Text key={index}>{events[v.eventId]?.name}</Text>
                      }
                      {
                        index + 1 === eventList.length ? null : <Text mr={1}>,</Text>
                      }
                    </>
                  )}
                </Flex>
              </Box>
              <Flex ml={'auto'} w={'100px'} justifyContent={'center'}>
                <Badge colorScheme='orange'>{eventList.length} Win{eventList.length > 1 ? 's' : ''}</Badge>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      );
    })}
  </Flex>;
}