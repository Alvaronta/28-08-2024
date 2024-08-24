import { Box, chakra, Heading, Image, Text, Flex, Badge } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs"

function formatDate(timestamp) {
  if (!timestamp) return '';
  const now = new Date();
  const secondsPast = (now.getTime() - timestamp) / 1000;
  if (secondsPast < 60) return `Hace ${secondsPast} segundo${secondsPast > 1 ? 's' : ''}`;
  const minutes = ~~(secondsPast / 60);
  if (secondsPast < 60 * 60) return `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
  const hours = ~~(secondsPast / (60 * 60));
  if (secondsPast < 60 * 60 * 24) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
  const days = ~~(secondsPast / (60 * 60 * 24));
  if (secondsPast < 60 * 60 * 24 * 30) return `Hace ${days} día${hours > 1 ? 's' : ''}`;
  const months = ~~(secondsPast / (60 * 60 * 24 * 30));
  if (secondsPast < 60 * 60 * 24 * 30 * 12) return `Hace ${months} mes${months > 1 ? 'es' : ''}`;
  return `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
}

export default function VideoCard({ title, thumbnail, url, date }) {
  const elapsedTime = new Date() - new Date(date);
  return (
    <Flex
      as={chakra.a}
      href={url}
      flexDir="column"
      target={"_blank"}
      bg={"#121212"}
      borderRadius={"7px"}
      transition={"all 80ms ease-in-out"}
      cursor={"pointer"}
      maxWidth={"270px"}
      margin={"0 10px"}
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Box position='relative' marginRight={"20px"} width={"100%"}>
        {
          (date && elapsedTime < 1000 * 60 * 60 * 24 * 7) ?
            <Badge
              boxShadow='2px 2px 5px #00000096'
              display='flex'
              alignItems='center'
              gap='3px'
              pos='absolute'
              left='5px'
              top='5px'
              bg='#ffe940'
              color='black'>
              <BsStarFill size='10px'></BsStarFill>
              Nuevo
            </Badge> : null
        }
        <Image src={thumbnail} width={"100%"} borderRadius={"7px 7px 0 0"} />
      </Box>

      <Flex h='100%' flexDir='column' justifyContent='space-between' padding={"10px"}>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Flex justifyContent='space-between'>
          <Text color={"#aaa"}>@Spreen</Text>
          <Text color={"#6e6e6e"}>{formatDate(new Date(date))}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}