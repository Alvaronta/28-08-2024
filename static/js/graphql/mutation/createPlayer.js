import graphql from "babel-plugin-relay/macro";

export const CreatePlayer = graphql`
  mutation createPlayerMutation($payload: CreatePlayerDTO!) {
    createPlayer(payload: $payload) {
      _id
    }
  }
`;
