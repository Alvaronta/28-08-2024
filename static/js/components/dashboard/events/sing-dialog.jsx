import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Flex,
    Text,
    Switch,
    FormControl,
    Input,
    FormLabel,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { commitMutation } from "relay-runtime";
import RelayEnvironment from "../../../graphql/environment";
import { CreatePlayer } from "../../../graphql/mutation";

export default function SignDialog({
    sign,
    setSign
}) {
    const DEFAULT_INPUT = {
        displayName: "",
        eventId: sign,
        discordId: "",
        premium: false
    };

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [input, setInput] = useState(DEFAULT_INPUT);
    const cancelRef = useRef();
    const storage = (() => {
        try {
            const res = window.localStorage.getItem('events');
            return JSON.parse(res) || [];
        } catch {
            return [];
        }
    })()

    function FormSwitch({ label, value, onChange }) {
        return (
            <Flex alignItems={"center"}>
                <Switch isChecked={value} onChange={onChange} mb={0} mr={3} />
                <Text>{label}</Text>
            </Flex>
        );
    }

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
        const newEntry = [...storage, { id: input.eventId }];
        window.localStorage.setItem('events', JSON.stringify(newEntry));
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
    }

    function close() {
        if (sign) setSign(null);
        setInput(DEFAULT_INPUT);
        onClose();
    }

    useEffect(() => {
        if ((sign) && !isOpen) {
            onOpen();
        }
    }, [sign, isOpen, onOpen, input]);

    function createPlayer() {
        if (storage.find(t => t.id === input.eventId)) return error(null, 'Ya estás participando!')
        commitMutation(RelayEnvironment, {
            mutation: CreatePlayer,
            variables: {
                payload: input,
            },
            onError: error,
            onCompleted: success,
        });
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
                        Inscripción
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        <FormControl mt={2}>
                            <FormLabel>Usuario de minecraft</FormLabel>
                            <Input
                                value={input.displayName}
                                onChange={(e) => updateField("displayName", e.target.value)}
                                placeholder="testUser"
                            />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>ID de discord</FormLabel>
                            <Input
                                value={input.discordId}
                                onChange={(e) => updateField("discordId", e.target.value)}
                                placeholder="123456789012345678"
                            />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Tipo de cuenta</FormLabel>

                            <FormSwitch
                                label={input.premium ? "Premium" : "No Premium"}
                                value={input.premium}
                                onChange={(e) =>
                                    updateField("premium", e.target.checked)
                                }
                            />
                        </FormControl>

                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button colorScheme="gray" onClick={close} ml={3}>
                            Cancelar
                        </Button>
                        <Button colorScheme="green" onClick={createPlayer} ml={3}>
                            Confirmar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}