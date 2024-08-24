import graphql from "babel-plugin-relay/macro";

export const GetJobs = graphql`
  query getJobsQuery {
    getJobs {
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
