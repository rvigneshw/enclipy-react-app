import { Modal, Button, Tooltip, Input } from "antd";
import {
  
  PlusCircleOutlined,
  
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useOfflineMutation } from "react-offix-hooks";

import { AES } from "crypto-js";

import { CREATE_CLIP, GET_MY_CLIPS } from "../GraphqlQueries";

export default function ClipBoardModal({ refetch }) {
//   const [addClip] = useOfflineMutation(CREATE_CLIP);
// 
//   async function handleSubmit() {
//     try {
//       await addClip({ variables: { data: encryptText(textAreaValue) } });
//     } catch (error) {
//       if (error.offline) {
//         error.watchOfflineChange();
//       }
//     }
//   }

  const { TextArea } = Input;
  const [createClip, { data }] = useMutation(CREATE_CLIP, {
    update(cache, { data }) {
      // We use an update function here to write the
      // new value of the GET_ALL_ClipS query.
      const newClipFromResponse = data?.createClip.clip;
      const existingClips = cache.readQuery({
        query: GET_MY_CLIPS,
      });
      if (existingClips && newClipFromResponse) {
        cache.writeQuery({
          query: GET_MY_CLIPS,
          data: {
            clips: [...existingClips?.clips, newClipFromResponse],
          },
        });
      }
      setokButtonLoading(false);
      setmodalVisible(false);
      settextAreaValue("");
    },
  });

  const [textAreaValue, settextAreaValue] = useState("");
  const [modalVisible, setmodalVisible] = useState(false);
  const [okButtonLoading, setokButtonLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAddFromClipboard = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        settextAreaValue(text);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const showModal = () => {
    setmodalVisible(true);
  };
  const encryptText = (text) => {
    return AES.encrypt(text, "SECRET_TOKEN").toString();
  };

  const handleOk = () => {
    setokButtonLoading(true);
    let oldList = data;
    createClip({ variables: { data: encryptText(textAreaValue) } });
  };

  const handleCancel = () => {
    setmodalVisible(false);
  };
  const onTextAreaValueChange = ({ target: { value } }) => {
    settextAreaValue(value);
  };

  return (
    <>
      <Tooltip title="Add Clip">
        <Button shape="circle" type="primary" onClick={showModal} size="large" icon={<PlusCircleOutlined />}/>
      </Tooltip>
      <Modal
        visible={modalVisible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={okButtonLoading}
            onClick={handleOk}
          >
            Add this Clip
          </Button>,
        ]}
      >
        {error ? (
          <p>Some Error Occuerd</p>
        ) : (
          <>
            <Button
              key="back"
              type="dashed"
              block
              onClick={handleAddFromClipboard}
            >
              Add From ClipBoard
            </Button>
            <TextArea
              value={textAreaValue}
              onChange={onTextAreaValueChange}
              autoSize={{ minRows: 3, maxRows: 15 }}
            />
          </>
        )}
      </Modal>
    </>
  );
}
