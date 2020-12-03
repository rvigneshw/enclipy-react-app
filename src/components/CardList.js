import React, { useState } from "react";
import {
  Card,
  List,
  Typography,
  Input,
  Button,
  message,
  Popconfirm,
} from "antd";
import { Row, Col } from "antd";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";
import { AES, enc } from "crypto-js";
import { useMutation } from "@apollo/client";
import { DELETE_CLIP, GET_MY_CLIPS } from "../GraphqlQueries";
import { copyTextToClipboard } from "../Utils/CopyClip";

const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 5,
  xxl: 6,
};

const ClipCard = (props) => {
  const { Paragraph } = Typography;
  const { TextArea } = Input;
  const id = props.data.id;
  const encryptedData = props.data.data;
  const [dataToDisplay, setDataToDisplay] = useState(encryptedData);
  const [editable, setEditable] = useState(true);
  const [viewDecrypted, setViewDecrypted] = useState(false);
  const [deleteButtonLoading, setdeleteButtonLoading] = useState(false);

  const [deleteClip, { data }] = useMutation(DELETE_CLIP, {
    update(cache, { data }) {
      const newClipFromResponse = data?.deleteClip.clip;
      cache.evict({ id: newClipFromResponse.id });

      const existingClips = cache.readQuery({
        query: GET_MY_CLIPS,
      });

      if (existingClips && newClipFromResponse) {
        var newClips = existingClips?.clips.filter(function (item) {
          return item.id !== newClipFromResponse.id;
        });

        cache.writeQuery({
          query: GET_MY_CLIPS,
          data: {
            clips: newClips,
          },
        });
      }
      message.success("Clip deleted!");
      setdeleteButtonLoading(false);
    },
  });

  const handleClick = (e) => {};
  const copySuccess = () => {
    message.success("Copied to Clipboard!");
  };

  const copyError = () => {
    message.error("Unable to Copy, Please check Clipboard permissions");
  };
  const handleMouseOver = (e) => {
    setViewDecrypted(true);
    setDataToDisplay(decryptText(encryptedData));
  };
  const handleMouseOut = (e) => {
    setViewDecrypted(false);
    setDataToDisplay(encryptedData);
  };
  const decryptText = (text) => {
    var bytes = AES.decrypt(text, "SECRET_TOKEN");
    var originalText = bytes.toString(enc.Utf8);
    return originalText;
  };

  return (
    <Card
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      hoverable
      bordered={false}
      style={{ margin: "0px" }}
    >
      {editable ? (
        <Paragraph>{dataToDisplay}</Paragraph>
      ) : (
        <TextArea></TextArea>
      )}
      <Button
        type="primary"
        shape="circle"
        icon={<CopyOutlined />}
        onClick={(e) => {
          var result = copyTextToClipboard(
            decryptText(encryptedData),
            copySuccess,
            copyError
          );
        }}
      />
      <Button
        type="default"
        shape="circle"
        icon={<EditOutlined />}
        onClick={(e) => {
          setEditable(!editable);
        }}
      />
      <Popconfirm
        title="Are you sure to delete this Clip?"
        onConfirm={(e) => {
          setdeleteButtonLoading(true);
          deleteClip({ variables: { id: id } });
        }}
        onCancel={(e) => {
          message.warning("Deletion aborted!");
        }}
        okText="Yes"
        cancelText="No"
      >
        <Button
          type="danger"
          shape="circle"
          loading={deleteButtonLoading}
          icon={<DeleteOutlined />}
        />
      </Popconfirm>
      ,
    </Card>
  );
};
export default function CardList(props) {
  return (
    <List
      grid={gridConfig}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <ClipCard data={item} />
        </List.Item>
      )}
    />
  );
}
