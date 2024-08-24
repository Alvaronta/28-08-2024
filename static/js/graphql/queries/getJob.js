import graphql from "babel-plugin-relay/macro";

export const GetJob = graphql`
  query getJobQuery($id: String!) {
    getJob(id: $id) {
      _id
      thumbnail
      title
      description
      age
      requirements
      questions {
        title
        description
        placeholder
      }
      open
    }
  }
`;
