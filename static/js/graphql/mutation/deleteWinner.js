import graphql from "babel-plugin-relay/macro";

export const DeleteWinner = graphql`
  mutation deleteWinnerMutation($sorteoId: String!) {
    deleteWinner(sorteoId: $sorteoId)
  }
`;
