import graphql from "babel-plugin-relay/macro";

export const GetSorteoParticipants = graphql`
  query getSorteoParticipantsQuery($sorteoId: String!, $page: Float!) {
    getSorteoParticipants(sorteoId: $sorteoId, page: $page) {
      username
    }
  }
`;
