import graphql from "babel-plugin-relay/macro";

export const GetSorteoAsAdmin = graphql`
  query getSorteoAsAdminQuery($sorteoId: String!) {
    getSorteoAsAdmin(sorteoId: $sorteoId) {
      _id
      enabled
      title
      description
      thumbnail
      tweet
      endIn
    }
  }
`;
