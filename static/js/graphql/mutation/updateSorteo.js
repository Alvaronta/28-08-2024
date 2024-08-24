import graphql from "babel-plugin-relay/macro";

export const UpdateSorteo = graphql`
  mutation updateSorteoMutation(
    $sorteoId: String!
    $payload: UpdateSorteoDTO!
  ) {
    updateSorteo(sorteoId: $sorteoId, payload: $payload) {
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
