import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://enclipy-api.herokuapp.com/graphql",
});
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2OTA3NTE0LCJleHAiOjE2MDk0OTk1MTR9.ajm_sR-hn7p191tA36zCQGxNspiCFn2gJtzOKl-MQrU";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = authLink.concat(httpLink);
export const client = new ApolloClient({
  cache,
  link,
});
