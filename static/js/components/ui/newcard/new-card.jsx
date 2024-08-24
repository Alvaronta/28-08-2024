import moment from "moment/moment";
import { BiPin } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NewCard({
  thumbnail,
  title,
  brief,
  slug,
  author,
  createdAt,
  pinned,
}) {
  return (
    <GridItem
      as={Link}
      to={"/noticias/" + slug}
      bg={"#121212"}
      borderRadius={"7px"}
      transition={"all 80ms ease-in-out"}
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Box marginRight={"20px"} width={"100%"}>
        {thumbnail != null && (
          <>
            {pinned && (
              <Badge position={"absolute"} bg={"orange"} margin={"5px"}>
                <Flex alignItems={"center"}>
                  <BiPin fontSize={"20px"} />
                  <Text ml={"2px"}>Fijado</Text>
                </Flex>
              </Badge>
            )}
            <Image
              src={thumbnail}
              width={"100%"}
              borderRadius={"7px 7px 0 0"}
            />
          </>
        )}

        {thumbnail == null && <Skeleton height={"180px"} width={"100%"} />}
      </Box>

      <Box padding={"10px"}>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text color={"#aaa"}>{brief}</Text>
        {title === undefined && brief === undefined && <SkeletonText />}
        {createdAt && <Text color={"#666"}>{moment(createdAt).fromNow()}</Text>}
      </Box>
    </GridItem>
  );
}