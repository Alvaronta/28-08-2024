import graphql from "babel-plugin-relay/macro";

export const DeleteSorteo = graphql`
  mutation deleteSorteoMutation($id: String!) {
    deleteSorteo(id: $id)
  }
`;
