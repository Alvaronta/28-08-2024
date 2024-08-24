import graphql from "babel-plugin-relay/macro";

export const UpdateUser = graphql`
  mutation updateUserMutation($userId: String!, $payload: UpdateUserDTO!) {
    updateUser(userId: $userId, payload: $payload)
  }
`;
