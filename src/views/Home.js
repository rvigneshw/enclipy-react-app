import React, { useState } from "react";

import CardList from "../components/CardList";
import AppHeader from "../components/AppHeader";
import { Layout } from "antd";
import { GET_MY_CLIPS } from "../GraphqlQueries";
import Loading from "./Loading";
import { useQuery } from "@apollo/client";

function Home(props) {
  const { loading, error, data, refetch } = useQuery(GET_MY_CLIPS);
  if (error) return `Error! ${error.message}`;
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <AppHeader loading={loading} />
      <Content
        style={{
          padding: "0 10px",
          marginTop: 20,
          height: "100%",
        }}
      >
        {loading ? <Loading /> : <CardList data={data} refetch={refetch} />}
      </Content>
    </div>
  );
}

export default Home;
