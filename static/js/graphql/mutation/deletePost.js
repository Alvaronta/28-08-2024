import graphql from "babel-plugin-relay/macro";

export const DeletePost = graphql`
  mutation deletePostMutation($id: String!) {
    deletePost(id: $id)
  }
`;
