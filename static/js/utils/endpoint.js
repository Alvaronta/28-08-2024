const DEV = "http://localhost:4000/";
const PROD = "https://api.spreen.world/";

// Obtain the endpoint to use depending on whether the app runs in production or dev mode.
export default function getEndpoint(path = "") {
  const endpoint = process.env["NODE_ENV"] === "production" ? PROD : DEV;
  if (path.startsWith("/")) path = path.replace("/", "");
  return endpoint + path;
}