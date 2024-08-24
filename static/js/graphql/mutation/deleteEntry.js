import graphql from "babel-plugin-relay/macro";

export const DeleteEntry = graphql`
  mutation deleteEntryMutation($id: String!) {
    deleteEntry(id: $id)
  }
`;
