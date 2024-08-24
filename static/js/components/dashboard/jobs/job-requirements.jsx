import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    List,
    ListItem,
    ListIcon,
    useDisclosure,
  } from "@chakra-ui/react";
  import { MdCheckCircle } from "react-icons/md";
  import { useRef, useEffect } from "react";
  import "./style.css";
  
  export default function SignDialog({
    join,
    setJoin,
    setAccept
  }) {
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
  
    function close() {
      if (join) setJoin(null);
      onClose();
    }
  
    useEffect(() => {
      if ((join) && !isOpen) {
        onOpen();
      }
    }, [join, isOpen, onOpen]);
  
    function accept() {
      close();
      setAccept(join.questions || []);
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
              Requisitos
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <List spacing={3}>
                {join?.requirements && join.requirements.map(r => <ListItem className="requirement">
                  <ListIcon as={MdCheckCircle} color='green.300' />
                  {r}
                </ListItem>)}
              </List>
  
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={close} ml={3}>
                Cancelar
              </Button>
              <Button colorScheme="green" onClick={accept} ml={3}>
                Entendido
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  