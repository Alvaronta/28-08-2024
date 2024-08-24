import graphql from "babel-plugin-relay/macro";

export const UpdateEvent = graphql`
  mutation updateEventMutation($id: String!, $payload: UpdateEventDTO!) {
    updateEvent(id: $id, payload: $payload) {
      _id
    }
  }
`;
