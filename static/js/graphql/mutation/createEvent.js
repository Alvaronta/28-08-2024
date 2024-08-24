import graphql from "babel-plugin-relay/macro";

export const CreateEvent = graphql`
  mutation createEventMutation($payload: CreateEventDTO!) {
    createEvent(payload: $payload) {
      _id
    }
  }
`;
