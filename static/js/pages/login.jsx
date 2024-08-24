import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Container from "../components/layout/container/container";
import { useSession } from "../contexts/session";
import { useNavigate } from "react-router-dom";

import RelayEnvironment from "../graphql/environment";
import { commitMutation } from "relay-runtime";
import { CreateSession } from "../graphql/mutation";

export default function Login() {
  const { login } = useSession();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    sending: false,
    error: null,
  });

  function submit(e) {
    e.preventDefault();

    if (formData.sending) return;

    setFormData({
      ...formData,
      error: null,
      sending: true,
    });

    commitMutation(RelayEnvironment, {
      mutation: CreateSession,
      variables: {
        payload: {
          email: formData.email,
          password: formData.password,
        },
      },
      onError: (err) => {
        const source = err.source;
        const message = source.errors[0].message;
        setFormData({
          ...formData,
          sending: false,
          error: message,
        });
      },
      onCompleted: (res) => {
        const { token } = res.createSession;
        login(token);
        navigate("/");
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Container marginTop={"40px"} maxWidth={"450px"}>
        <Heading>Autenticación</Heading>
        <Text color={"orange"} my={3}>
          Por el momento los registros estan deshabilitados para el público. Si
          ya estas registrado puedes iniciar sesión aquí.
        </Text>

        <Flex
          bg={"#FFF2"}
          padding={"3px 5px"}
          fontSize={"14px"}
          marginBottom={"5px"}
          borderLeft={"4px solid tomato"}
          display={formData.error ? "flex" : "none"}
        >
          <Text color={"tomato"} fontWeight={"bold"} marginRight={"5px"}>
            Error:
          </Text>
          <Text>{formData.error}</Text>
        </Flex>

        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            required
            type={"email"}
            placeholder={"john@example.com"}
            value={formData.email}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({
                ...formData,
                email: value,
              });
            }}
          />
        </FormControl>

        <FormControl marginTop={"20px"}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            required
            type={"password"}
            placeholder={"********"}
            value={formData.password}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({
                ...formData,
                password: value,
              });
            }}
          />
        </FormControl>

        <FormControl marginTop={"20px"}>
          <Button disabled={formData.sending} type={"submit"}>
            {formData.sending && <Spinner />}
            {!formData.sending && "Iniciar sesión"}
          </Button>
        </FormControl>
      </Container>
    </form>
  );
}
