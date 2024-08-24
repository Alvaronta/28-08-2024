import { Box, Flex, Text } from "@chakra-ui/react";

function TimeUnit({ name, value }) {
  return (
    <Box textAlign={"center"} margin={"0 10px"}>
      <Text
        fontSize={"24px"}
        bg={"#000"}
        color={"white"}
        padding={"3px 6px"}
        borderRadius={"7px"}
      >
        {value}
      </Text>
      <Text fontSize={"17px"} fontWeight={"bold"}>
        {name}
      </Text>
    </Box>
  );
}

export default function Countdown({ color, countdown }) {
  return (
    <Flex color={color}>
      <TimeUnit name={"D"} value={countdown.days} />
      <TimeUnit name={"H"} value={countdown.hours} />
      <TimeUnit name={"M"} value={countdown.minutes} />
      <TimeUnit name={"S"} value={countdown.seconds} />
    </Flex>
  );
}