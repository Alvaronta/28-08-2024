import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Box,
    Text,
    Link,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useRef, useEffect } from "react";
  
  export default function SignDialog({
    entry,
    setEntry
  }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
  
    function close() {
      if (entry) setEntry(null);
      onClose();
    }
  
    useEffect(() => {
      if ((entry) && !isOpen) {
        onOpen();
      }
    }, [entry, isOpen, onOpen]);
  
    if (!entry) return;
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Postulación
            </AlertDialogHeader>
  
            <AlertDialogBody>
              <Box mt={4}>
                <Text fontWeight='bold'>Nombre</Text>
                <Text color='whiteAlpha.700'>{entry.name}</Text>
              </Box>
  
              <Box mt={4}>
                <Text fontWeight='bold'>Edad</Text>
                <Text color='whiteAlpha.700'>{entry.age}</Text>
              </Box>
  
              <Box mt={4}>
                <Text fontWeight='bold'>Contacto</Text>
                <Text color='whiteAlpha.700'>{entry.contact}</Text>
              </Box>
  
              <Box mt={4}>
                <Text fontWeight='bold'>Portfolio</Text>
                <Link href={entry.portfolio} target="_blank" color='blue.300'>{entry.portfolio}</Link>
              </Box>
  
              <Box mt={4}>
                <Text fontWeight='bold'>Ejemplo</Text>
                <Link href={entry.example} target="_blank" color='blue.300'>{entry.example}</Link>
              </Box>
  
              <Box mt={4}>
                <Text fontWeight='bold'>Notas</Text>
                <Text color='whiteAlpha.700'>{entry.aditional || '-'}</Text>
              </Box>
  
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={close} ml={3}>
                Cerrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  } 