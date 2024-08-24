import graphql from "babel-plugin-relay/macro";

export const GetEventWinners = graphql`
  query getEventWinnersQuery {
    getEventWinners {
      _id
      eventList {
        eventId
        eventObj {
          name
          url
        }
      }
      displayName
    }
  }
`;
