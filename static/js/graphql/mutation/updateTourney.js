import graphql from "babel-plugin-relay/macro";

export const UpdateTourney = graphql`
  mutation updateTourneyMutation($id: String!, $payload: UpdateTourneyDTO!) {
    updateTourney(id: $id, payload: $payload) {
      _id
    }
  }
`;
