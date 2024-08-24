import graphql from "babel-plugin-relay/macro";

export const GetSorteos = graphql`
  query getSorteosQuery {
    getSorteos {
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
