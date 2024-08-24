import graphql from "babel-plugin-relay/macro";

export const GetEntry = graphql`
  query getEntryQuery($id: String!) {
    getEntry(id: $id) {
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
      createdAt
    }
  }
`;
