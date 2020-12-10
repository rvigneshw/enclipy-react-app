import React, { useState } from "react";
import { Layout } from "antd";
import { useQuery } from "@apollo/client";

import AppRouter from "./AppRouter";

import { GET_MY_CLIPS } from "./GraphqlQueries";
import "./App.css";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <div className="App">
      <Layout className="layout" style={{ background: "#FFF" }}>
        <AppRouter />

        {/* <Footer */}
        {/*   style={{ */}
        {/*     position: "sticky", */}
        {/*     bottom: "0", */}
        {/*     height: "50px", */}
        {/*     padding: "0px", */}
        {/*     background: "#FFFFFF00", */}
        {/*   }} */}
        {/* > */}
        {/*    */}
        {/* </Footer> */}
      </Layout>
    </div>
  );
};

export default App;
