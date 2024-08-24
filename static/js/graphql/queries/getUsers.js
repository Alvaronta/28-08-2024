import graphql from "babel-plugin-relay/macro";

export const GetUsers = graphql`
  query getUsersQuery {
    getUsers {
      _id
      email
      displayName
      canPost
      canGiveaway
      canCreateUsers
    }
  }
`;
