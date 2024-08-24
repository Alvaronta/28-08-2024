import graphql from "babel-plugin-relay/macro";

export const GetEvents = graphql`
  query getEventsQuery {
    getEvents {
      _id
      slug
      name
      date
      thumbnail
      url
      participation
      max
    }
  }
`;
