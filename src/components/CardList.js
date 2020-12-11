import React, { useState } from "react";
import { List } from "antd";
import { ClipCard } from "./ClipCard";

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
  return (
    <List
      grid={gridConfig}
      dataSource={props.data.clips}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <ClipCard data={item} refetch={props.refetch} />
        </List.Item>
      )}
    />
  );
}
