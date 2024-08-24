import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Container from "../../components/layout/container/container";
import RelayEnvironment from "../../graphql/environment";
import { UpdateSorteo } from "../../graphql/mutation";
import { commitMutation, fetchQuery } from "relay-runtime";
import { useNavigate, useParams } from "react-router-dom";
import { GetSorteoAsAdmin } from "../../graphql/queries/getSorteoAsAdmin";
import moment from "moment/moment";
import { DeleteWinner } from "../../graphql/mutation/deleteWinner";

export default function EditSorteo() {
  const navigate = useNavigate();
  const params = useParams("id");
  const id = params?.id;

  const [formState, setFormState] = useState({
    loading: false,
    error: null,
  });

  const [data, setData] = useState({
    enabled: false,
    title: "",
    description: "",
    thumbnail: "",
    tweet: "",
    endIn: "",
  });

  useEffect(() => {
    fetchQuery(RelayEnvironment, GetSorteoAsAdmin, {
      sorteoId: id,
    })
      .toPromise()
      .then(({ getSorteoAsAdmin }) => {
        const { _id, ...props } = getSorteoAsAdmin;

        const endIn = moment(getSorteoAsAdmin.endIn).format(
          "YYYY-MM-DDThh:mm:ss.SSS"
        );

        setData({
          ...props,
          endIn,
        });
      });
  }, [id]);

  function deleteParticipants() {
    if (formState.loading) return;
    setFormState({
      loading: false,
      error: "Esta funcion aun no se encuentrra implementada",
    });
  }

  function deleteWinner() {
    if (formState.loading) return;
    setFormState({ loading: true, error: null });

    commitMutation(RelayEnvironment, {
      mutation: DeleteWinner,
      variables: {
        sorteoId: id,
      },
      onCompleted: () => {
        setFormState({
          loading: false,
          error: "Se ha eliminado al participante",
        });
      },
    });
  }

  function submit(e) {
    e.preventDefault();

    if (formState.loading) return;
    setFormState({ loading: true, error: null });

    commitMutation(RelayEnvironment, {
      mutation: UpdateSorteo,
      variables: {
        sorteoId: id,
        payload: {
          ...data,
          endIn: new Date(data.endIn).getTime(),
        },
      },
      onError: (err) => {
        const source = err.source;
        const message = source.errors[0].message;
        setFormState({ loading: false, error: message });
      },
      onCompleted: (res) => {
        navigate(`/sorteos`);
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Container maxWidth="500px" marginTop={"30px"} marginBottom={"30px"}>
        <FormControl marginTop={"20px"}>
          <FormLabel>Titulo del sorteo</FormLabel>
          <Input
            variant={"flushed"}
            placeholder={"Sorteo x3 iPhone"}
            fontSize={"18px"}
            size={"lg"}
            required
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </FormControl>
        <FormControl marginTop={"20px"}>
          <FormLabel>Descripcion del sorteo</FormLabel>
          <Input
            variant={"flushed"}
            placeholder={
              "Estamos sorteando 3 iPhone para todas las personas que..."
            }
            fontSize={"18px"}
            size={"lg"}
            required
            value={data.description}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
          />
        </FormControl>
        <FormControl marginTop={"20px"}>
          <FormLabel>Thumbnail</FormLabel>
          <Input
            variant={"flushed"}
            placeholder={"https://example.com/miniatura.jpg"}
            fontSize={"18px"}
            size={"lg"}
            required
            value={data.thumbnail}
            onChange={(e) => {
              setData({ ...data, thumbnail: e.target.value });
            }}
          />
        </FormControl>
        <FormControl marginTop={"20px"}>
          <FormLabel>Tweet</FormLabel>
          <Input
            variant={"flushed"}
            placeholder={
              "https://twitter.com/Twitter/status/1580661436132757506"
            }
            fontSize={"18px"}
            size={"lg"}
            required
            value={data.tweet}
            onChange={(e) => {
              setData({ ...data, tweet: e.target.value });
            }}
          />
        </FormControl>
        <FormControl marginTop={"20px"}>
          <FormLabel>Termina el</FormLabel>
          <Input
            variant={"flushed"}
            fontSize={"18px"}
            size={"lg"}
            type={"datetime-local"}
            required
            value={data.endIn}
            onChange={(e) => {
              setData({ ...data, endIn: e.target.value });
            }}
          />
        </FormControl>
        <FormControl marginTop={"20px"}>
          <Checkbox
            defaultChecked={data.enabled}
            value={data.enabled}
            onChange={(e) => {
              setData({ ...data, enabled: e.target.checked });
            }}
          >
            Sorteo activo y publico
          </Checkbox>
        </FormControl>
        <FormControl marginTop={"20px"}>
          <Flex alignItems={"center"}>
            <Button
              marginRight={"10px"}
              type={"submit"}
              colorScheme={"green"}
              isLoading={formState.loading}
            >
              Guardar
            </Button>
            <Button
              marginRight={"10px"}
              isLoading={formState.loading}
              colorScheme={"orange"}
              onClick={deleteWinner}
            >
              Eliminar Ganador
            </Button>
            <Button
              marginRight={"10px"}
              isLoading={formState.loading}
              colorScheme={"red"}
              onClick={deleteParticipants}
            >
              Eliminar participantes
            </Button>
          </Flex>
        </FormControl>
        <FormControl marginTop={"20px"}>
          <Text color={"tomato"}>{formState.error}</Text>
        </FormControl>
      </Container>
    </form>
  );
}
