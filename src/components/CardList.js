import React from "react";
import { List } from "antd";
import { AES, enc } from "crypto-js";
import { ClipCard } from "./ClipCard";
const decryptText = (text) => {
  var bytes = AES.decrypt(text, "SECRET_TOKEN");
  var originalText = bytes.toString(enc.Utf8);
  return originalText;
};
const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 5,
  xxl: 6,
};
function filterItems(arr, query) {
  return arr.filter(function (el) {
    let decryptedText = decryptText(el.data);
    return decryptedText.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

export default function CardList(props) {
  let data = filterItems(props.data.clips, props.searchString);
  return (
    <List
      grid={gridConfig}
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <ClipCard data={item} refetch={props.refetch} />
        </List.Item>
      )}
    />
  );
}
