import graphql from "babel-plugin-relay/macro";

export const GetEventWinner = graphql`
  query getEventWinnerQuery($id: String!) {
    getEventWinner(id: $id) {
      _id
      eventList {
        eventId
        eventObj {
          _id
          name
          url
        }
      }
      displayName
    }
  }
`;
