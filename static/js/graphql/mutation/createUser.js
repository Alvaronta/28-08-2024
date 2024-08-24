import graphql from "babel-plugin-relay/macro";

export const CreateUser = graphql`
  mutation createUserMutation($payload: CreateUserDTO!) {
    createUser(payload: $payload) {
      _id
      displayName
      email
      canCreateUsers
      canGiveaway
      canPost
    }
  }
`;
