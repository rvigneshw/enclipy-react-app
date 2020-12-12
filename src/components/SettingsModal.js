import { Modal, Button, Tooltip, Input, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import { AES } from "crypto-js";

export default function SettingsModal(props) {
  
  const [modalVisible, setmodalVisible] = useState(false);

  
  const showModal = () => {
    setmodalVisible(true);
  };
  const encryptText = (text) => {
    return AES.encrypt(text, "SECRET_TOKEN").toString();
  };

  const handleOk = () => {

  };

  const handleCancel = () => {
    setmodalVisible(false);
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
