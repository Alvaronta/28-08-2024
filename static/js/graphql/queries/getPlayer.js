import graphql from "babel-plugin-relay/macro";

export const GetPlayer = graphql`
  query getPlayerQuery($id: String!) {
    getPlayer(id: $id) {
      eventId
      displayName
      discordId
      premium
    }
  }
`;
