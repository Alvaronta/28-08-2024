import graphql from "babel-plugin-relay/macro";

export const GetVideos = graphql`
  query getVideosQuery {
    getVideos {
      id
      title
      thumbnail
      url
      date
    }
  }
`;
