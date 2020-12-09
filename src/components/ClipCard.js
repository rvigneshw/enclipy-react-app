import React, { useState } from "react";
import { Card, Typography, Input, Button, message, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CopyOutlined,
  CloseOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { AES, enc } from "crypto-js";
import { useMutation } from "@apollo/client";
import { DELETE_CLIP, GET_MY_CLIPS, UPDATE_CLIP } from "../GraphqlQueries";
import { copyTextToClipboard } from "../Utils/CopyClip";

const decryptText = (text) => {
  var bytes = AES.decrypt(text, "SECRET_TOKEN");
  var originalText = bytes.toString(enc.Utf8);
  return originalText;
  // return text;
};
const encryptText = (text) => {
  return AES.encrypt(text, "SECRET_TOKEN").toString();
};

export function ClipCard({ data, refetch }) {
  const { Paragraph } = Typography;
  const { TextArea } = Input;
  const id = data.id;
  const encryptedData = data.data;
  const [dataToDisplay, setDataToDisplay] = useState(
    decryptText(encryptedData)
  );
  const [editable, setEditable] = useState(false);
  const [saveButtonLoading, setsaveButtonLoading] = useState(false);
  const [viewDecrypted, setViewDecrypted] = useState(true);
  const [deleteButtonLoading, setdeleteButtonLoading] = useState(false);

  const [deleteClip] = useMutation(DELETE_CLIP, {
    update(cache, { data }) {
      const newClipFromResponse = data?.deleteClip.clip;
      cache.evict({
        id: "ROOT_QUERY",
        fieldName: "clip",
        id: newClipFromResponse.id,
      });

      //       const existingClips = cache.readQuery({
      //         query: GET_MY_CLIPS,
      //       });
      //
      //       if (existingClips && newClipFromResponse) {
      //         var newClips = existingClips?.clips.filter(function (item) {
      //           return item.id !== newClipFromResponse.id;
      //         });
      //
      //         cache.writeQuery({
      //           query: GET_MY_CLIPS,
      //           data: {
      //             clips: newClips,
      //           },
      //         });
      //
      //         refetch();
      //       }
      refetch();
      message.success("Clip deleted!");
      setdeleteButtonLoading(false);
    },
  });
  const [updateClip] = useMutation(UPDATE_CLIP, {
    update(cache, { data }) {
      // We use an update function here to write the
      // new value of the GET_ALL_ClipS query.
      const newClipFromResponse = data?.updateClip.clip;
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
            clips: [...newClips, newClipFromResponse],
          },
        });
        message.success("Clip updated!");
        refetch();
        setsaveButtonLoading(false);
        setEditable(false);
      }
      // setokButtonLoading(false);
      // setmodalVisible(false);
      // settextAreaValue("");
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
  const onTextAreaValueChange = ({ target: { value } }) => {
    setDataToDisplay(value);
  };
  const handleClipUpdate = () => {};
  // setDataToDisplay(decryptText(encryptedData));
  return (
    // <Card
    //   onClick={handleClick}
    //   onMouseOver={handleMouseOver}
    //   onMouseOut={handleMouseOut}
    //   hoverable
    //   bordered={false}
    //   style={{ margin: "0px" }}
    // >
    <Card
      onClick={handleClick}
      hoverable
      bordered={false}
      style={{ margin: "0px" }}
    >
      {editable ? (
        <TextArea
          allowClear
          value={dataToDisplay}
          bordered={false}
          autoSize={{ minRows: 1, maxRows: 15 }}
          onChange={onTextAreaValueChange}
        />
      ) : (
        // <TextArea  allowClear onChange={onChange} />
        <Paragraph>{decryptText(data.data)}</Paragraph>
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
      {editable ? (
        <>
          <Button
            type="default"
            shape="circle"
            icon={<SaveOutlined />}
            loading={saveButtonLoading}
            onClick={(e) => {
              setsaveButtonLoading(true);
              updateClip({
                variables: { id: id, data: encryptText(dataToDisplay) },
              });
              refetch();
            }}
          />
          <Button
            type="default"
            shape="circle"
            icon={<CloseOutlined />}
            onClick={(e) => {
              setDataToDisplay(decryptText(encryptedData));
              setEditable(!editable);
            }}
          />
        </>
      ) : (
        <Button
          type="default"
          shape="circle"
          icon={<EditOutlined />}
          onClick={(e) => {
            setEditable(!editable);
          }}
        />
      )}

      <Popconfirm
        title="Are you sure to delete this Clip?"
        onConfirm={(e) => {
          setdeleteButtonLoading(true);
          deleteClip({ variables: { id: id } });
          refetch();
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
    </Card>
  );
}