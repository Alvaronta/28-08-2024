import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Text,
    Switch,
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
  import { CreateJob, UpdateJob, DeleteJob } from "../../../graphql/mutation";
  import { GetJob } from "../../../graphql/queries";
  
  const DEFAULT_INPUT = {
    thumbnail: "",
    requirements: [],
    questions: [],
    title: "",
    description: "",
    age: 0,
    open: false,
  };
  
  const DEFAULT_QUESTION = {
    title: '',
    description: '',
    placeholder: ''
  };
  
  export default function JobDialog({
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
    const [question, setQuestion] = useState(DEFAULT_QUESTION);
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
        description: "Postulación guardada correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      close();
    }
  
    function deletedSuccess() {
      toast({
        title: "Exito",
        description: "Postulación eliminada correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      close();
    }
  
    function FormSwitch({ label, value, onChange }) {
      return (
        <Flex alignItems={"center"}>
          <Switch isChecked={value} onChange={onChange} mb={0} mr={3} />
          <Text>{label}</Text>
        </Flex>
      );
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
  
    function questionUpdate(key, value) {
      setQuestion({ ...question, [key]: value });
    }
  
    function addQuestion() {
      const array = [...input.questions || []];
  
      array.push(question);
  
      setInput({ ...input, questions: array });
      setModifiedInput({ ...modifiedInput, questions: array });
      setQuestion(DEFAULT_QUESTION);
    }
  
    function addReq(key) {
      const update = {};
      const array = [...input[key] || []];
  
      array.push(event);
      update[key] = array;
  
      setInput({ ...input, ...update });
      setModifiedInput({ ...modifiedInput, ...update });
      setEvent("");
    }
  
    function removeReq(key, req, ind) {
      const update = {};
      const array = [...input[key] || []];
  
      const index = array.findIndex((v, i) => v === req && ind === i);
      if (index < 0) return;
  
      array.splice(index, 1);
      update[key] = array;
  
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
  
    function createJob() {
      commitMutation(RelayEnvironment, {
        mutation: CreateJob,
        variables: {
          payload: input,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function deleteJob() {
      commitMutation(RelayEnvironment, {
        mutation: DeleteJob,
        variables: {
          id: editing,
        },
        onError: error,
        onCompleted: deletedSuccess,
      });
    }
  
    function updateJob() {
      commitMutation(RelayEnvironment, {
        mutation: UpdateJob,
        variables: {
          id: editing,
          payload: modifiedInput,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function runAction() {
      return editing ? updateJob() : createJob();
    }
  
    useEffect(() => {
      if ((creating || editing) && !isOpen) {
        onOpen();
      }
  
      if (editing && !fetched) {
        fetchQuery(RelayEnvironment, GetJob, { id: editing })
          .toPromise()
          .then(({ getJob }) => {
            setFetched(true);
            setInput({ ...input, ...getJob });
          });
      }
    }, [editing, creating, isOpen, onOpen, fetched, input]);
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Flex justifyContent='space-between' alignItems='center'>
                <Text>{creating ? "Añadir nueva" : "Editar"} postulación</Text>
                <Button colorScheme="red" onClick={deleteJob} ml={3}>
                  Eliminar
                </Button>
              </Flex>
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input
                  value={input.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Edicion"
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>Descripcion</FormLabel>
                <Input
                  value={input.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Lorem ipsum.."
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
                <FormLabel>Requisitos</FormLabel>
                {input.requirements.length ? <Flex flexDirection={'column'} gap={'5px'}>
                  {input.requirements.map((req, i) => {
                    return (
                      <Flex key={i} gap='5px'>
                        <Box w='100%' p='2' borderRadius='md' border='1px solid' borderColor='inherit'>
                          <Text>{req}</Text>
                        </Box>
                        <Button onClick={() => removeReq('requirements', req, i)} colorScheme="red"><FiMinus size='18px'></FiMinus></Button>
                      </Flex>
                    );
                  })}
                </Flex> : null}
              </FormControl>
  
              <FormControl mt={3}>
                <Flex gap='5px'>
                  <Input
                    value={event}
                    onChange={(e) => {
                      const raw = e.target.value;
                      inputUpdate(raw);
                    }}
                    placeholder="Saber editar"
                    type={"text"}
                  />
                  <Button onClick={() => addReq('requirements')} colorScheme="teal"><FiPlus size='18px'></FiPlus></Button>
                </Flex>
              </FormControl>
  
              <FormControl>
                <FormLabel>Preguntas</FormLabel>
                {input.questions.length ? <Flex flexDirection={'column'} gap={'5px'}>
                  {input.questions.map((question, i) => {
                    return (
                      <Flex key={i} alignItems='center' gap='5px'>
                        <Box w='100%' p='5px 10px' borderRadius='md' border='1px solid' borderColor='inherit'>
                          <Text lineHeight={1.3} noOfLines={1}>{question.title}</Text>
                          <Text lineHeight={1.3} noOfLines={1} fontSize='13px' color='gray.400'>{question.description}</Text>
                        </Box>
                        <Button onClick={() => removeReq('questions', question, i)} colorScheme="red"><FiMinus size='18px'></FiMinus></Button>
                      </Flex>
                    );
                  })}
                </Flex> : null}
              </FormControl>
  
              <FormControl mt={3}>
                <Input
                  value={question.title}
                  onChange={(e) => {
                    const raw = e.target.value;
                    questionUpdate('title', raw);
                  }}
                  placeholder="¿Hace cuanto que ...?"
                  type={"text"}
                />
                <Input
                  mt={1}
                  value={question.description}
                  onChange={(e) => {
                    const raw = e.target.value;
                    questionUpdate('description', raw);
                  }}
                  placeholder="Tener en cuenta que ... (Opcional)"
                  type={"text"}
                />
                <Flex mt={1} alignItems='center' gap='5px'>
                  <Input
                    value={question.placeholder}
                    onChange={(e) => {
                      const raw = e.target.value;
                      questionUpdate('placeholder', raw);
                    }}
                    placeholder="Hace 8 años. (Opcional)"
                    type={"text"}
                  />
                  <Button onClick={() => addQuestion()} colorScheme="teal"><FiPlus size='18px'></FiPlus></Button>
                </Flex>
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Participacion</FormLabel>
  
                <FormSwitch
                  label={input.open ? "Abierta" : "Cerrada"}
                  value={input.open}
                  onChange={(e) =>
                    updateField("open", e.target.checked)
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