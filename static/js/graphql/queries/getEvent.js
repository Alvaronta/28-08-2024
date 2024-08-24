import graphql from "babel-plugin-relay/macro";

export const GetEvent = graphql`
  query getEventQuery($id: String!) {
    getEvent(id: $id) {
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
