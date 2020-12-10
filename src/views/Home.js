import React, { useState } from "react";

import CardList from "../components/CardList";
import AppHeader from "../components/AppHeader";
import { Layout } from "antd";

function Home(props) {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <AppHeader />
      <Content
        style={{
          padding: "0 10px",
          marginTop: 20,
          height: "100%",
        }}
      >
        <CardList />
      </Content>
    </div>
  );
}

export default Home;
