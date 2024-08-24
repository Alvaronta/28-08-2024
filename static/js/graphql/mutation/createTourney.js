import graphql from "babel-plugin-relay/macro";

export const CreateTourney = graphql`
  mutation createTourneyMutation($payload: CreateTourneyDTO!) {
    createTourney(payload: $payload) {
      _id
    }
  }
`;
