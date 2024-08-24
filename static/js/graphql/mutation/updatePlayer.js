import graphql from "babel-plugin-relay/macro";

export const UpdatePlayer = graphql`
  mutation updatePlayerMutation($id: String!, $payload: UpdatePlayerDTO!) {
    updatePlayer(id: $id, payload: $payload) {
      _id
    }
  }
`;
