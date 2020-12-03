import React, { useState } from "react";
import { Layout } from "antd";
import { useQuery } from "@apollo/client";

import AppRouter from "./AppRouter";
import AppHeader from "./components/AppHeader";
import { GET_MY_CLIPS } from "./GraphqlQueries";
import "./App.css";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const App = () => {
  const { Header, Content, Footer } = Layout;
  const { loading, error, data, refetch } = useQuery(GET_MY_CLIPS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader refetch={refetch} data={data.clips} />
        <Content style={{ padding: "0 10px", marginTop: 64, height: "100%" }}>
          <AppRouter refetch={refetch} data={data.clips} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
