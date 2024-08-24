import graphql from "babel-plugin-relay/macro";

export const GetPlayers = graphql`
  query getPlayersQuery($eventId: String!, $page: Float!) {
    getPlayers(eventId: $eventId, page: $page)  {
      displayName
      discordId
      premium
    }
  }
`;
