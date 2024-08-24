import graphql from "babel-plugin-relay/macro";

export const CreateEntry = graphql`
  mutation createEntryMutation($payload: CreateEntryDTO!, $id: String!, $captcha: String!) {
    createEntry(payload: $payload, id: $id, captcha: $captcha) {
      _id
    }
  }
`;
