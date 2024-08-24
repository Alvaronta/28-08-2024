import graphql from "babel-plugin-relay/macro";

export const GetTourney = graphql`
  query getTourneyQuery($id: String!) {
    getTourney(id: $id) {
      _id
      date
      thumbnail
      time
      url
      user
    }
  }
`;
