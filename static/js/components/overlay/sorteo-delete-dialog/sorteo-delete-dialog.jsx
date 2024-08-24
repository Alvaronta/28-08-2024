import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
  } from "@chakra-ui/react";
  import { useRef } from "react";
  import { useNavigate } from "react-router-dom";
  
  import { commitMutation } from "relay-runtime";
  import RelayEnvironment from "../../../graphql/environment";
  import { DeleteSorteo } from "../../../graphql/mutation/deleteSorteo";
  
  export default function SorteoDeleteDialog({ isOpen, _id, onClose }) {
    const navigate = useNavigate();
    const cancelRef = useRef();
  
    function deleteSorteo(e) {
      commitMutation(RelayEnvironment, {
        mutation: DeleteSorteo,
        variables: {
          id: _id,
        },
        onCompleted: () => {
          navigate("/sorteos");
        },
      });
  
      return onClose(e);
    }
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar sorteo
            </AlertDialogHeader>
  
            <AlertDialogBody>
              ¿Estas seguro? Los participantes registrados tambien se eliminaran.
            </AlertDialogBody>
  
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={deleteSorteo} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  