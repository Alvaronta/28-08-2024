import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Text,
    FormControl,
    Input,
    FormLabel,
    useDisclosure,
    useToast,
    Textarea,
  } from "@chakra-ui/react";
  import { useState, useRef, useEffect } from "react";
  import { commitMutation } from "relay-runtime";
  import ReCAPTCHA from "react-google-recaptcha";
  
  import RelayEnvironment from "../../../graphql/environment";
  import { CreateEntry } from "../../../graphql/mutation";
  
  export default function SignDialog({
    accept,
    setAccept
  }) {
    const DEFAULT_INPUT = {
      name: "",
      age: null,
      country: "",
      contact: "",
      questions: [],
      portfolio: "",
      aditional: ""
    };
  
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [input, setInput] = useState(DEFAULT_INPUT);
    const cancelRef = useRef();
    const recaptchaInstance = useRef();
  
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
        description: "Te postulaste con éxito, gracias!.",
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
  
    function answer(index, question, value) {
  
      const array = [...input.questions || []];
  
      const update = { question, response: value };
  
      array[index] = update;
  
      setInput({ ...input, questions: array });
    }
  
    function close() {
      if (accept) setAccept(null);
      setInput(DEFAULT_INPUT);
      onClose();
    }
  
    useEffect(() => {
      if ((accept) && !isOpen) {
        onOpen();
      }
    }, [accept, isOpen, onOpen, input]);
  
    async function createEntry() {
      const captcha = await recaptchaInstance.current.executeAsync();
      commitMutation(RelayEnvironment, {
        mutation: CreateEntry,
        variables: {
          id: input._id,
          payload: input,
          captcha
        },
        onError: error,
        onCompleted: success,
      });
      recaptchaInstance.current.reset();
    }
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <ReCAPTCHA
          ref={recaptchaInstance}
          sitekey="6Le1KnYmAAAAAInyTrcgPV9NQeMPtU6-gUJAC2hV"
          size="invisible"
        />,
  
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Postulación
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <FormControl mt={2}>
                <FormLabel>Nombre</FormLabel>
                <Input
                  value={input.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Jorgito"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>País de residencia</FormLabel>
                <Input
                  value={input.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  placeholder="Argentina"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Edad</FormLabel>
                <Input
                  value={input.age}
                  type="number"
                  onChange={(e) => updateField("age", +e.target.value || null)}
                  placeholder="16"
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Contacto</FormLabel>
                <Input
                  value={input.contact}
                  onChange={(e) => updateField("contact", e.target.value)}
                  placeholder="email / twitter / discord.."
                />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel mb={0}>Ejemplo de tus trabajos</FormLabel>
                <Text mb={1} color='gray.400' fontSize='14px'>Dar acceso en caso de ser privado.</Text>
                <Input
                  value={input.portfolio}
                  onChange={(e) => updateField("portfolio", e.target.value)}
                  placeholder="behance / github / imgur.."
                />
              </FormControl>
  
              {accept && accept.map((question, i) => <FormControl mt={2}>
                <FormLabel mb={0}>{question.title}</FormLabel>
                {question.description ? <Text mb={1} color='gray.400' fontSize='14px'>{question.description}</Text> : null}
                <Input
                  value={input.questions[i]?.response || ''}
                  onChange={(e) => answer(i, question.title, e.target.value)}
                  placeholder={question.placeholder}
                />
              </FormControl>)}
  
              <FormControl mt={4}>
                <Text mb={1} color='gray.400' fontSize='14px'>Contanos por qué deberías formar parte del equipo.</Text>
                <Input as={Textarea}
                  maxLength={256}
                  value={input.aditional}
                  onChange={(e) => updateField("aditional", e.target.value)}
                  placeholder="(opcional)"
                />
              </FormControl>
  
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={close} ml={3}>
                Cancelar
              </Button>
              <Button colorScheme="green" onClick={createEntry} ml={3}>
                Listo!
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }