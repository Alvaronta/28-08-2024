import graphql from "babel-plugin-relay/macro";

export const GetUser = graphql`
  query getUserQuery($id: String!) {
    getUser(id: $id) {
      _id
      email
      displayName
      canPost
      canGiveaway
      canCreateUsers
    }
  }
`;
