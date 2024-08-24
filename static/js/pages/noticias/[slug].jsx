import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { QueryRenderer } from "react-relay";
import { Link, useParams } from "react-router-dom";

import { useSession } from "../../contexts/session";
import RelayEnvironment from "../../graphql/environment";
import { GetPost } from "../../graphql/queries";

import Container from "../../components/layout/container/container";
import PostDeleteDialog from "../../components/overlay/post-delete-dialog/post-delete-dialog";
import Markdown from "../../components/ui/markdown/mardown";
import Error404 from "../_404";
import Error500 from "../_500";

function NoticiaStillLoading() {
  return (
    <>
      <Container marginTop={"30px"}>
        <Box>
          <Box marginBottom={"30px"} textAlign={"center"}>
            <SkeletonText maxWidth={"300px"} noOfLines={1} />
          </Box>
          <Box fontSize={"16px"} color={"#ccc"}>
            <SkeletonText noOfLines={6} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

function NoticiaLoaded({ thumbnail, title, brief, content, _id, slug }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLogged } = useSession();

  return (
    <>
      <PostDeleteDialog
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        _id={_id}
      />

      <Image width={"50%"} margin={"30px auto"} src={thumbnail} />
      <Container marginBottom={"30px"}>
        <Box>
          <Box marginBottom={"30px"} textAlign={"center"}>
            <Heading fontSize={"40px"}>{title}</Heading>
            <Text fontSize={"18px"}>{brief}</Text>

            {isLogged() && (
              <Flex justifyContent={"flex-end"}>
                <IconButton
                  as={Link}
                  to={"/noticias/" + slug + "/edit"}
                  icon={<BiPencil />}
                />
                <IconButton
                  colorScheme={"red"}
                  marginLeft={"10px"}
                  icon={<BiTrash />}
                  onClick={onOpen}
                />
              </Flex>
            )}
          </Box>
          <Box fontSize={"16px"} color={"#ccc"}>
            <Markdown content={content} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default function Noticia() {
  const { slug } = useParams();

  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={GetPost}
      variables={{
        slug,
      }}
      render={({ error, props }) => {
        if (!error && !props) {
          return <NoticiaStillLoading />;
        } else if (props) {
          const post = props.getPost;
          if (post != null) {
            return <NoticiaLoaded {...post} slug={slug} />;
          } else {
            return <Error404 />;
          }
        } else if (error) {
          const source = error?.source;
          const message = source?.errors[0]?.message;
          return <Error500 message={message} />;
        }
      }}
    />
  );
}
