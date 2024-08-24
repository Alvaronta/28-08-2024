import graphql from "babel-plugin-relay/macro";

export const GetPost = graphql`
  query getPostQuery($slug: String!) {
    getPost(slug: $slug) {
      _id
      title
      brief
      content
      author
      slug
      thumbnail
      createdAt
    }
  }
`;
