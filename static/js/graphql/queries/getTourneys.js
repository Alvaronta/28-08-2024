import graphql from "babel-plugin-relay/macro";

export const GetTourneys = graphql`
  query getTourneysQuery {
    getTourneys {
      _id
      date
      thumbnail
      time
      url
      user
    }
  }
`;
