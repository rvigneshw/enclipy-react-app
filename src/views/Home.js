import React, { useState } from "react";

import CardList from "../components/CardList";
import AppHeader from "../components/AppHeader";
import { Layout } from "antd";
import { GET_MY_CLIPS } from "../GraphqlQueries";
import Loading from "./Loading";
import { useQuery } from "@apollo/client";

function Home(props) {
  const [searchString, setsearchString] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_MY_CLIPS);
  if (error) return `Error! ${error.message}`;
  const { Content } = Layout;

  return (
    <div>
      <AppHeader
        searchString={searchString}
        setsearchString={setsearchString}
        loading={loading}
      />
      <Content
        style={{
          padding: "0 10px",
          marginTop: 10,
          height: "100%",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <CardList
            data={data}
            refetch={refetch}
            searchString={searchString}
            setsearchString={setsearchString}
          />
        )}
      </Content>
    </div>
  );
}

export default Home;
