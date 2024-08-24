import graphql from "babel-plugin-relay/macro";

export const GetEntries = graphql`
query getEntriesQuery($jobId: String!, $page: Float!) {
  getEntries(jobId: $jobId, page: $page) {
    _id
    name
    portfolio
    age
    country
    contact
    questions {
      question
      response
    }
    aditional
    createdAt
  }
}
`;
