import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

export default function PCItem({ thumbnail, title, links }) {
  return (
    <Card maxW="sm" bg={"#0008"}>
      <CardBody>
        <Image src={thumbnail} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}