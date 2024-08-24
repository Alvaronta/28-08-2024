import { Avatar, Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BsGift, BsNewspaper, BsShield } from "react-icons/bs";

function UserBadge({ children, enabled, colorScheme, icon }) {
  if (!enabled) return null;
  else {
    return (
      <Badge fontSize={"md"} colorScheme={colorScheme}>
        <Flex alignItems={"center"}>
          {icon !== null && <Box marginRight={"5px"}>{icon}</Box>}
          {children}
        </Flex>
      </Badge>
    );
  }
}

export default function UsersList({ users, onSelect }) {
  return users.map(
    (
      { _id, displayName, email, canGiveaway, canPost, canCreateUsers },
      index
    ) => {
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
          onClick={() => onSelect(_id)}
          key={index}
        >
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Avatar name={displayName} />
              <Box marginLeft={"10px"}>
                <Text fontSize={"24px"} fontWeight={"bold"}>
                  {displayName}
                </Text>
                <Text fontSize={"15px"} color={"gray.400"}>
                  {email}
                </Text>
              </Box>
            </Flex>

            <Text fontSize={"15px"} color={"gray.500"}>
              {_id}
            </Text>

            <Stack direction="row">
              <UserBadge
                colorScheme={"red"}
                enabled={canCreateUsers}
                icon={<BsShield />}
              >
                Admin
              </UserBadge>

              <UserBadge
                colorScheme={"blue"}
                enabled={canPost}
                icon={<BsNewspaper />}
              >
                Editor
              </UserBadge>

              <UserBadge
                colorScheme={"purple"}
                enabled={canGiveaway}
                icon={<BsGift />}
              >
                Sorteos
              </UserBadge>
            </Stack>
          </Flex>
        </Box>
      );
    }
  );
}