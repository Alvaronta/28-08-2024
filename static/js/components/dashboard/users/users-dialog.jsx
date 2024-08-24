import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Switch,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useRef } from "react";
  import { commitMutation, fetchQuery } from "relay-runtime";
  import RelayEnvironment from "../../../graphql/environment";
  import { CreateUser, UpdateUser } from "../../../graphql/mutation";
  import { GetUser } from "../../../graphql/queries";
  
  const DEFAULT_INPUT = {
    email: "",
    displayName: "",
    password: "",
    canPost: false,
    canGiveaway: false,
    canCreateUsers: false,
  };
  
  function FormSwitch({ label, value, onChange }) {
    return (
      <Flex alignItems={"center"}>
        <Switch isChecked={value} onChange={onChange} mr={3} />
        <FormLabel>{label}</FormLabel>
      </Flex>
    );
  }
  
  export default function UserDialog({
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
        fetchQuery(RelayEnvironment, GetUser, { id: editing })
          .toPromise()
          .then(({ getUser }) => {
            const { _id, ...user } = getUser;
            setFetched(true);
            setInput({ ...input, ...user });
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
        description: "El usuario ha sido guardado correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      close();
    }
  
    function createUser() {
      commitMutation(RelayEnvironment, {
        mutation: CreateUser,
        variables: {
          payload: input,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function updateUser() {
      commitMutation(RelayEnvironment, {
        mutation: UpdateUser,
        variables: {
          userId: editing,
          payload: modifiedInput,
        },
        onError: error,
        onCompleted: success,
      });
    }
  
    function runAction(e) {
      return editing ? updateUser(e) : createUser(e);
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
              {creating ? "Crear nuevo" : "Editar"} usuario.
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <FormControl>
                <FormLabel>Display name</FormLabel>
                <Input
                  value={input.displayName}
                  onChange={(e) => updateField("displayName", e.target.value)}
                  placeholder="pepito"
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  value={input.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="pepito@gmail.com"
                  type={"email"}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  value={input.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  placeholder="********"
                  type={"password"}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Permisos para crear o editar:</FormLabel>
  
                <FormSwitch
                  label={"Usuarios"}
                  value={input.canCreateUsers}
                  onChange={(e) =>
                    updateField("canCreateUsers", e.target.checked)
                  }
                />
  
                <FormSwitch
                  label={"Publicaciones"}
                  value={input.canPost}
                  onChange={(e) => updateField("canPost", e.target.checked)}
                />
  
                <FormSwitch
                  label={"Sorteos"}
                  value={input.canGiveaway}
                  onChange={(e) => updateField("canGiveaway", e.target.checked)}
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