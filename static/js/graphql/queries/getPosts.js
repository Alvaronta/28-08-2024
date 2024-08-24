import graphql from "babel-plugin-relay/macro";

export const GetPosts = graphql`
  query getPostsQuery {
    getPosts {
      _id
      title
      brief
      author
      slug
      thumbnail
      createdAt
    }
  }
`;
