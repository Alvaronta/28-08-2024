import graphql from "babel-plugin-relay/macro";

export const UpdateEventWinner = graphql`
  mutation updateEventWinnerMutation($id: String!, $payload: UpdateEventWinnerDTO!) {
    updateEventWinner(id: $id, payload: $payload) {
      _id
    }
  }
`;
