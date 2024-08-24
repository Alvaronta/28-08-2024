import graphql from "babel-plugin-relay/macro";

export const CreatePost = graphql`
  mutation createPostMutation($payload: CreatePostDTO!) {
    createPost(payload: $payload) {
      slug
    }
  }
`;
