import graphql from "babel-plugin-relay/macro";

export const UpdateJob = graphql`
  mutation updateJobMutation($id: String!, $payload: UpdateJobDTO!) {
    updateJob(id: $id, payload: $payload) {
      _id
    }
  }
`;
