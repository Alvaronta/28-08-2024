import graphql from "babel-plugin-relay/macro";

export const CreateJob = graphql`
  mutation createJobMutation($payload: CreateJobDTO!) {
    createJob(payload: $payload) {
      _id
    }
  }
`;
