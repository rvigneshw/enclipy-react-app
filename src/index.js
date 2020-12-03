import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloOfflineClient } from "offix-client";
import { ApolloOfflineProvider } from "react-offix-hooks";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GraphqlClient";

const Root = () => {
  const [initialized, setInitialized] = useState(false);

  // initialize the offix client and set the apollo client
  useEffect(() => {
    client.init().then(() => setInitialized(true));
  }, []);

  if (initialized) {
    return (
      <ApolloOfflineProvider client={client}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ApolloOfflineProvider>
    );
  }
  return <h2>Loading...</h2>;
};

render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
