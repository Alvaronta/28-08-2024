import graphql from "babel-plugin-relay/macro";

export const CreateSorteo = graphql`
  mutation createSorteoMutation($payload: CreateSorteoDTO!) {
    createSorteo(payload: $payload) {
      _id
      enabled
      title
      description
      thumbnail
      tweet
      winner
      endIn
    }
  }
`;
