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
  import { DeletePost } from "../../../graphql/mutation";
  
  export default function PostDeleteDialog({ isOpen, _id, onClose }) {
    const navigate = useNavigate();
    const cancelRef = useRef();
  
    function deletePost(e) {
      commitMutation(RelayEnvironment, {
        mutation: DeletePost,
        variables: {
          id: _id,
        },
        onCompleted: () => {
          navigate("/noticias");
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
              Eliminar publicacion
            </AlertDialogHeader>
  
            <AlertDialogBody>
              ¿Estas seguro? Esta accion no se podra deshacer.
            </AlertDialogBody>
  
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={deletePost} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  