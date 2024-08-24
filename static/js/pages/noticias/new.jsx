import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Container from "../../components/layout/container/container";
import RelayEnvironment from "../../graphql/environment";
import { CreatePost } from "../../graphql/mutation";
import { commitMutation } from "relay-runtime";
import { useNavigate } from "react-router-dom";
import Markdown from "../../components/ui/markdown/mardown";

export default function New() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    loading: false,
    error: null,
  });

  const [postData, setPostData] = useState({
    thumbnail: "https://i.imgur.com/dzyzbyd.png",
    title: "",
    brief: "",
    slug: "",
    content: "",
    pinned: false,
  });

  function submit(e) {
    e.preventDefault();

    if (formState.loading) return;
    setFormState({ loading: true, error: null });

    commitMutation(RelayEnvironment, {
      mutation: CreatePost,
      variables: {
        payload: postData,
      },
      onError: (err) => {
        const source = err.source;
        const message = source.errors[0].message;
        setFormState({ loading: false, error: message });
      },
      onCompleted: (res) => {
        const post = res.createPost;
        if (post.slug) {
          navigate(`/noticias/${post.slug}`);
        }
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Box
        width={"50%"}
        margin={"30px auto"}
        transition={"80ms all ease-in-out"}
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        <Image width={"100%"} src={postData.thumbnail} />
        <Input
          variant={"filled"}
          placeholder={"https://imgur.com/i/banner.jpg"}
          size={"lg"}
          textAlign={"center"}
          required
          value={postData.thumbnail}
          onChange={(e) => {
            setPostData({ ...postData, thumbnail: e.target.value });
          }}
        />
      </Box>
      <Container>
        <Box>
          <Box marginBottom={"30px"} textAlign={"center"}>
            <Input
              variant={"flushed"}
              placeholder={"Inserta titulo aqui"}
              fontSize={"35px"}
              fontWeight={"bold"}
              size={"lg"}
              textAlign={"center"}
              required
              value={postData.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
            />

            <Input
              variant={"flushed"}
              placeholder={"Inserta descripcion breve aqui"}
              fontSize={"16px"}
              size={"md"}
              textAlign={"center"}
              marginTop={"10px"}
              required
              value={postData.brief}
              onChange={(e) => {
                setPostData({ ...postData, brief: e.target.value });
              }}
            />
          </Box>
          <Box fontSize={"16px"} color={"#ccc"}>
            <Tabs>
              <TabList>
                <Tab>Editor</Tab>
                <Tab>Previsualizar</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Textarea
                    size={"lg"}
                    rows={"20"}
                    required
                    value={postData.content}
                    onChange={(e) => {
                      setPostData({
                        ...postData,
                        content: e.target.value,
                      });
                    }}
                  ></Textarea>
                </TabPanel>
                <TabPanel minHeight={"545px"}>
                  <Markdown content={postData.content} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box margin={"20px 0"}>
            <FormControl>
              <FormLabel>Slug (URL de la publicacion)</FormLabel>
              <InputGroup size="sm" margin={"auto"} marginTop={"10px"}>
                <InputLeftAddon children="https://spreen.world/noticias/" />
                <Input
                  variant={"flushed"}
                  placeholder={"my-post"}
                  maxWidth={"200px"}
                  fontSize={"16px"}
                  textAlign={"left"}
                  marginLeft={"5px"}
                  required
                  value={postData.slug}
                  onChange={(e) => {
                    setPostData({ ...postData, slug: e.target.value });
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl marginTop={"20px"}>
              <Checkbox
                defaultChecked={postData.pinned}
                value={postData.pinned}
                onChange={(e) => {
                  setPostData({ ...postData, pinned: e.target.checked });
                }}
              >
                Fijado
              </Checkbox>
            </FormControl>

            <FormControl marginTop={"20px"}>
              <Flex alignItems={"center"}>
                <Button
                  marginRight={"10px"}
                  type={"submit"}
                  isLoading={formState.loading}
                >
                  Guardar
                </Button>
                <Text color={"tomato"} marginRight={"5px"}>
                  {formState.error}
                </Text>
              </Flex>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </form>
  );
}
