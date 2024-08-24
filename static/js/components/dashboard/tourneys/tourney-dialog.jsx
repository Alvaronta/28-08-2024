import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useRef } from "react";
  import { commitMutation, fetchQuery } from "relay-runtime";
  import RelayEnvironment from "../../../graphql/environment";
  import { CreateTourney, UpdateTourney } from "../../../graphql/mutation";
  import { GetTourney } from "../../../graphql/queries";
  
  const DEFAULT_INPUT = {
    date: "",
    thumbnail: "",
    time: 0,
    url: "",
    user: "",
  };
  
  export default function TourneyDialog({
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
        fetchQuery(RelayEnvironment, GetTourney, { id: editing })
          .toPromise()
          .then(({ getTourney }) => {
            const { _id, ...Tourney } = getTourney;
            setFetched(true);
            setInput({ ...input, ...Tourney });
          });
      }
    }, [editing, creating, isOpen, onOpen, fetched, input]);
  
    function error(exception) {
      const message = exception.source.errors[0].message;
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
        description: "El torneo ha sido guardado correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      close();
    }
  
    function createTourney() {
      commitMutation(RelayEnvironment, {
        mutation: CreateTourney,
        variables: {
          payload: input,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function updateTourney() {
      commitMutation(RelayEnvironment, {
        mutation: UpdateTourney,
        variables: {
          id: editing,
          payload: modifiedInput,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function runAction(e) {
      return editing ? updateTourney(e) : createTourney(e);
    }
  
    function getTime() {
      return new Date(input.time * 1000).toISOString().slice(11, 19);
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
              {creating ? "Crear nuevo" : "Editar"} torneo
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <FormControl>
                <FormLabel>Usuario</FormLabel>
                <Input
                  value={input.user}
                  onChange={(e) => updateField("user", e.target.value)}
                  placeholder="pepito"
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>Tiempo (En caso de Speedrun)</FormLabel>
                <Input
                  value={getTime()}
                  onChange={(e) => {
                    const raw = e.target.value;
                    const splits = raw.split(":");
                    const secs =
                      +splits[0] * 60 * 60 + +splits[1] * 60 + +splits[2];
                    updateField("time", secs);
                  }}
                  step={"2"}
                  type={"time"}
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>URL del video/stream</FormLabel>
                <Input
                  value={input.url}
                  onChange={(e) => updateField("url", e.target.value)}
                  placeholder="https://youtube.com/watch?v=abcdefghijk"
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>Thumbnail</FormLabel>
                <Input
                  value={input.thumbnail}
                  onChange={(e) => updateField("thumbnail", e.target.value)}
                  placeholder="https://imgur.com/i/abcdef.jpg"
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>Fecha</FormLabel>
                <Input
                  value={input.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  type={"date"}
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