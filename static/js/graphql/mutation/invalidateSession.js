import graphql from "babel-plugin-relay/macro";

export const InvalidateSession = graphql`
  mutation invalidateSessionMutation {
    invalidateSession
  }
`;
