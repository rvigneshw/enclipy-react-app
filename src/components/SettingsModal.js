import { Modal, Button, Tooltip, Input, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { AES } from "crypto-js";

import { CREATE_CLIP, GET_MY_CLIPS } from "../GraphqlQueries";

export default function SettingsModal(props) {
  const { Title } = Typography;
  const { TextArea } = Input;
  
  const [textAreaValue, settextAreaValue] = useState("");
  const [modalVisible, setmodalVisible] = useState(false);
  const [okButtonLoading, setokButtonLoading] = useState(false);
  const [error, setError] = useState(false);

  
  const showModal = () => {
    setmodalVisible(true);
  };
  const encryptText = (text) => {
    return AES.encrypt(text, "SECRET_TOKEN").toString();
    // return text;
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
      <Tooltip title="Settings">
        <Button
          shape="circle"
          type="primary"
          onClick={showModal}
          size="large"
          icon={<SettingOutlined />}
        />
      </Tooltip>
      <Modal
        visible={modalVisible}
        title="Settings"
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
      </Modal>
    </>
  );
}
