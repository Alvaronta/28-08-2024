import { useEffect, useState } from "react";
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
  Spinner,
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
import { UpdatePost } from "../../graphql/mutation";
import { commitMutation, fetchQuery } from "relay-runtime";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "../../components/ui/markdown/mardown";
import { GetPost } from "../../graphql/queries";

export default function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: null,
    thumbnail: "",
    title: "",
    brief: "",
    slug: "",
    content: "",
    pinned: false,
  });
  const [modifiedInput, setModifiedInput] = useState({});
  const [formState, setFormState] = useState({
    loading: false,
    error: null,
  });

  function updateField(key, value) {
    const update = {};
    update[key] = value;

    setInput({ ...input, ...update });
    setModifiedInput({ ...modifiedInput, ...update });
  }

  function submit(e) {
    e.preventDefault();

    if (formState.loading) return;
    setFormState({ loading: true, error: null });

    commitMutation(RelayEnvironment, {
      mutation: UpdatePost,
      variables: {
        payload: modifiedInput,
        id: input.id,
      },
      onError: (err) => {
        const source = err.source;
        const message = source.errors[0].message;
        setFormState({ loading: false, error: message });
      },
      onCompleted: () => {
        navigate(`/noticias/${modifiedInput.slug || input.slug}`);
      },
    });
  }

  useEffect(() => {
    fetchQuery(RelayEnvironment, GetPost, {
      slug,
    })
      .toPromise()
      .then(({ getPost }) => {
        setInput({
          brief: getPost.brief,
          content: getPost.content,
          slug: getPost.slug,
          thumbnail: getPost.thumbnail,
          title: getPost.title,
          id: getPost._id,
          pinned: getPost.pinned,
        });
      });
  }, [slug]);

  if (input.id == null) {
    return <Spinner />;
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
        <Image width={"100%"} src={input.thumbnail} />
        <Input
          variant={"filled"}
          placeholder={"https://imgur.com/i/banner.jpg"}
          size={"lg"}
          textAlign={"center"}
          required
          value={input.thumbnail}
          onChange={(e) => updateField("thumbnail", e.target.value)}
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
              value={input.title}
              onChange={(e) => updateField("title", e.target.value)}
            />

            <Input
              variant={"flushed"}
              placeholder={"Inserta descripcion breve aqui"}
              fontSize={"16px"}
              size={"md"}
              textAlign={"center"}
              marginTop={"10px"}
              required
              value={input.brief}
              onChange={(e) => updateField("brief", e.target.value)}
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
                    value={input.content}
                    onChange={(e) => updateField("content", e.target.value)}
                  ></Textarea>
                </TabPanel>
                <TabPanel minHeight={"545px"}>
                  <Markdown content={input.content} />
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
                  value={input.slug}
                  onChange={(e) => updateField("thuslugmbnail", e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl marginTop={"20px"}>
              <Checkbox
                defaultChecked={input.pinned}
                value={input.pinned}
                onChange={(e) => updateField("pinned", e.target.checked)}
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
