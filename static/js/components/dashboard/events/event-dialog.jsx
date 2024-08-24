import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    FormControl,
    Flex,
    Input,
    Text,
    FormLabel,
    Switch,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import { useState, useRef, useEffect } from "react";
  import { commitMutation, fetchQuery } from "relay-runtime";
  import RelayEnvironment from "../../../graphql/environment";
  import { CreateEvent, UpdateEvent } from "../../../graphql/mutation";
  import { GetEvent } from "../../../graphql/queries";
  
  const DEFAULT_INPUT = {
    date: "",
    slug: "",
    thumbnail: "",
    participation: false,
    url: "",
    name: "",
    max: 0,
  };
  
  function FormSwitch({ label, value, onChange }) {
    return (
      <Flex alignItems={"center"}>
        <Switch isChecked={value} onChange={onChange} mb={0} mr={3} />
        <Text>{label}</Text>
      </Flex>
    );
  }
  
  export default function EventDialog({
    editing,
    setEditing,
    creating,
    setCreating,
  }) {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [fetched, setFetched] = useState(false);
    const [input, setInput] = useState(DEFAULT_INPUT);
    const [modifiedInput, setModifiedInput] = useState({});
    const cancelRef = useRef();
  
    function error(exception, msg) {
      const message = msg || exception.source.errors[0].message;
      toast({
        title: "Error",
        description: "El servidor ha respondido: " + message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  
    function success() {
      toast({
        title: "Exito",
        description: "El evento ha sido guardado correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      close();
    }
  
    function updateField(key, value) {
      const update = {};
      update[key] = value;
  
      setInput({ ...input, ...update });
      setModifiedInput({ ...modifiedInput, ...update });
    }
  
    function close() {
      if (editing) setEditing(null);
      if (creating) setCreating(null);
      setFetched(false);
      setInput(DEFAULT_INPUT);
      setModifiedInput({});
      onClose();
    }
  
    useEffect(() => {
      if ((creating || editing) && !isOpen) {
        onOpen();
      }
  
      if (editing && !fetched) {
        fetchQuery(RelayEnvironment, GetEvent, { id: editing })
          .toPromise()
          .then(({ getEvent }) => {
            const { _id, ...winner } = getEvent;
            setFetched(true);
            setInput({ ...input, ...winner });
          });
      }
    }, [editing, creating, isOpen, onOpen, fetched, input]);
  
    function createEvent() {
      commitMutation(RelayEnvironment, {
        mutation: CreateEvent,
        variables: {
          payload: input,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function updateEvent() {
      commitMutation(RelayEnvironment, {
        mutation: UpdateEvent,
        variables: {
          id: editing,
          payload: modifiedInput,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function runAction(e) {
      return editing ? updateEvent(e) : createEvent(e);
    }
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {creating ? "Añadir nuevo" : "Editar"} evento
            </AlertDialogHeader>
  
            <AlertDialogBody>
  
              {editing ?
                <FormControl mt={2}>
                  <FormLabel>ID</FormLabel>
                  <Input
                    value={editing}
                    disabled={true}
                    placeholder="0x0000000000000000000"
                  />
                </FormControl> :
                null}
  
              <FormControl mt={2}>
                <FormLabel>Identificador del post</FormLabel>
                <Input
                  value={input.slug}
                  onChange={(e) => updateField("slug", e.target.value)}
                  placeholder="newEvent"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Nombre del evento</FormLabel>
                <Input
                  value={input.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Las aventuras de pepe"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>URL del video/stream (Finalizado)</FormLabel>
                <Input
                  value={input.url}
                  onChange={(e) => updateField("url", e.target.value)}
                  placeholder="https://youtube.com/watch?v=abcdefghijk"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Thumbnail</FormLabel>
                <Input
                  value={input.thumbnail}
                  onChange={(e) => updateField("thumbnail", e.target.value)}
                  placeholder="https://imgur.com/i/abcdef.jpg"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Fecha</FormLabel>
                <Input
                  value={input.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  type={"date"}
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Maximos participantes</FormLabel>
                <Input
                  value={input.max}
                  onChange={(e) => updateField("max", +e.target.value || 1)}
                  min={1}
                  type={"number"}
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Participacion</FormLabel>
  
                <FormSwitch
                  label={input.participation ? "Activa" : "Cerrada"}
                  value={input.participation}
                  onChange={(e) =>
                    updateField("participation", e.target.checked)
                  }
                />
              </FormControl>
  
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={close} ml={3}>
                Cancelar
              </Button>
              <Button colorScheme="green" onClick={runAction} ml={3}>
                Guardar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }