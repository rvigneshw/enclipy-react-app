import React, { useState } from "react";
import { List } from "antd";
import { ClipCard } from "./ClipCard";
import { useQuery } from "@apollo/client";
import { GET_MY_CLIPS } from "../GraphqlQueries";
import Loading from "../views/Loading";
const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 5,
  xxl: 6,
};

export default function CardList(props) {
  const { loading, error, data, refetch } = useQuery(GET_MY_CLIPS);
  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;
  return (
    <List
      grid={gridConfig}
      dataSource={data.clips}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <ClipCard data={item} refetch={refetch} />
        </List.Item>
      )}
    />
  );
}
