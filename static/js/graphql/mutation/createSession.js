import graphql from "babel-plugin-relay/macro";

export const CreateSession = graphql`
  mutation createSessionMutation($payload: CreateSessionDTO!) {
    createSession(payload: $payload) {
      token
    }
  }
`;
