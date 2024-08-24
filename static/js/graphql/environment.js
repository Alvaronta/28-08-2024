import { Environment, Network, RecordSource, Store } from "relay-runtime";
import getEndpoint from "../utils/endpoint";

const GQL_ENDPOINT = getEndpoint("/graphql");

// Obtain the access token to make requests that require authentication.
function getAuthorization() {
  const token = localStorage.getItem("token");
  return "bearer " + (token || "none");
}

// Send a GraphQL request to the endpoint server.
async function gqlFetch(text, variables) {
  // Fetch data from GraphQL endpoint.
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: getAuthorization(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return gqlFetch(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export default RelayEnvironment;
