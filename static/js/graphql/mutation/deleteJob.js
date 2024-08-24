import graphql from "babel-plugin-relay/macro";

export const DeleteJob = graphql`
  mutation deleteJobMutation($id: String!) {
    deleteJob(id: $id)
  }
`;
