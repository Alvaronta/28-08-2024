import graphql from "babel-plugin-relay/macro";

export const GetPinnedPosts = graphql`
  query getPinnedPostsQuery {
    getPinnedPosts {
      _id
      title
      brief
      author
      slug
      thumbnail
      createdAt
      pinned
    }
  }
`;
