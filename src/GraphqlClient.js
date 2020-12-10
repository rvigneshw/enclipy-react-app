import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://enclipy-api.herokuapp.com/graphql",
});
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
  const token =localStorage.getItem('jwt');
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
