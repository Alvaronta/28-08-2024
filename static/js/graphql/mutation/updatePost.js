import graphql from "babel-plugin-relay/macro";

export const UpdatePost = graphql`
  mutation updatePostMutation($id: String!, $payload: UpdatePostDTO!) {
    updatePost(id: $id, payload: $payload) {
      _id
    }
  }
`;
