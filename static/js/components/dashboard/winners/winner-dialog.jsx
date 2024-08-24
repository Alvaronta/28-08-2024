import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Text,
    Box,
    FormControl,
    FormLabel,
    Flex,
    Input,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import { FiMinus, FiPlus } from "react-icons/fi";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useRef } from "react";
  import { commitMutation, fetchQuery } from "relay-runtime";
  import RelayEnvironment from "../../../graphql/environment";
  import { CreateEventWinner, UpdateEventWinner } from "../../../graphql/mutation";
  import { GetEvent, GetEventWinner } from "../../../graphql/queries";
  
  const DEFAULT_INPUT = {
    thumbnail: "",
    eventList: [],
    displayName: "",
  };
  
  export default function EventWinnerDialog({
    events,
    setEvents,
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
    const [event, setEvent] = useState("");
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
        description: "El ganador ha sido guardado correctamente.",
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
  
    function inputUpdate(value) {
      setEvent(value);
    }
  
    function getEvent(callback) {
      fetchQuery(RelayEnvironment, GetEvent, { id: event })
        .toPromise()
        .then(({ getEvent }) => {
          if (!getEvent) {
            callback(true);
            error(null, "No se encontró el torneo.");
            return;
          };
          callback(null, getEvent);
        })
        .catch(callback);
    }
  
    function addEvent(key) {
      const update = {};
      const array = [...input[key] || []];
      if (events[event]) return error(null, 'Ya existe ese torneo');
      getEvent((error, r) => {
        if (error) return;
  
        const event = { eventId: r._id };
        const obj = {};
        const { _id, ...rest } = r;
  
        obj[_id] = rest;
  
        array.push(event);
        update[key] = array;
  
        setEvents({ ...events, ...obj });
        setInput({ ...input, ...update });
        setModifiedInput({ ...modifiedInput, ...update });
      });
  
      setEvent("");
    }
  
    function removeEvent(key, eventId, ind) {
      const update = {};
      const eventObject = events;
      const array = [...input[key] || []];
  
      const index = array.findIndex((v, i) => v.eventId === eventId && ind === i);
      if (index < 0) return;
  
      delete eventObject[eventId];
      array.splice(index, 1);
      update[key] = array;
  
      setInput({ ...input, ...update });
      setModifiedInput({ ...modifiedInput, ...update });
      setEvent("");
      setEvents(eventObject);
    }
  
    function close() {
      if (editing) setEditing(null);
      if (creating) setCreating(null);
      setFetched(false);
      setInput(DEFAULT_INPUT);
      setModifiedInput({});
      onClose();
    }
  
    function createEventWinner() {
      commitMutation(RelayEnvironment, {
        mutation: CreateEventWinner,
        variables: {
          payload: input,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function updateEventWinner() {
      commitMutation(RelayEnvironment, {
        mutation: UpdateEventWinner,
        variables: {
          id: editing,
          payload: modifiedInput,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function runAction() {
      return editing ? updateEventWinner() : createEventWinner();
    }
  
    useEffect(() => {
      if ((creating || editing) && !isOpen) {
        onOpen();
      }
  
      if (editing && !fetched) {
        fetchQuery(RelayEnvironment, GetEventWinner, { id: editing })
          .toPromise()
          .then(({ getEventWinner }) => {
            const object = { ...getEventWinner, eventList: getEventWinner.eventList.map(e => ({ eventId: e.eventId })) };
            const update = getEventWinner.eventList.reduce((ae, { eventObj: { _id, ...rest } }) => ({ ...ae, [_id]: rest }), {});
            setFetched(true);
            setEvents({ ...events, ...update });
            setInput({ ...input, ...object });
          });
      }
    }, [editing, creating, isOpen, setEvents, events, onOpen, fetched, input]);
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {creating ? "Añadir nuevo" : "Editar"} ganador
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <FormControl>
                <FormLabel>Usuario</FormLabel>
                <Input
                  value={input.displayName}
                  onChange={(e) => updateField("displayName", e.target.value)}
                  placeholder="jorgito"
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
                <FormLabel>Torneos</FormLabel>
                <Flex flexDirection={'column'} gap={'5px'}>
                  {input.eventList.map(({ eventId }, i) => {
                    return (
                      <Flex key={i} gap='5px'>
                        <Box w='100%' p='2' borderRadius='md' border='1px solid' borderColor='inherit'>
                          <Text>{events[eventId]?.name}</Text>
                        </Box>
                        <Button onClick={() => removeEvent('eventList', eventId, i)} colorScheme="red"><FiMinus size='18px'></FiMinus></Button>
                      </Flex>
                    );
                  })}
                </Flex>
              </FormControl>
  
              <FormControl marginTop='5px'>
                <Flex gap='5px'>
                  <Input
                    value={event}
                    onChange={(e) => {
                      const raw = e.target.value;
                      inputUpdate(raw);
                    }}
                    placeholder="64236e1076cffcd198a98fa3"
                    type={"text"}
                  />
                  <Button onClick={() => addEvent('eventList')} colorScheme="teal"><FiPlus size='18px'></FiPlus></Button>
                </Flex>
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