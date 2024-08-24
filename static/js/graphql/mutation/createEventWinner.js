import graphql from "babel-plugin-relay/macro";

export const CreateEventWinner = graphql`
  mutation createEventWinnerMutation($payload: CreateEventWinnerDTO!) {
    createEventWinner(payload: $payload) {
      _id
    }
  }
`;
