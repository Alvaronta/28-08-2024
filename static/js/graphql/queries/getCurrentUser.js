import graphql from "babel-plugin-relay/macro";

export const GetCurrentUser = graphql`
  query getCurrentUserQuery {
    getCurrentUser {
      _id
      email
      displayName
    }
  }
`;
