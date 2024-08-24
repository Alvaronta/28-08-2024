import graphql from "babel-plugin-relay/macro";

export const GetSorteo = graphql`
  query getSorteoQuery($sorteoId: String!) {
    getSorteo(sorteoId: $sorteoId) {
      sorteo {
        _id
        enabled
        title
        description
        thumbnail
        tweet
        winner
        endIn
      }
      participants
    }
  }
`;
