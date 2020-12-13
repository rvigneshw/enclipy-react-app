import { Modal, Button, Tooltip, Typography, Select } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const smallText = {
  fontSize: 10,
};
export default function SettingsModal(props) {
  const { Option } = Select;
  const { Text } = Typography;
  const [modalVisible, setmodalVisible] = useState(false);
  const [visibilityMode, setvisibilityMode] = useState(
    localStorage.getItem("view")
  );

  const showModal = () => {
    setmodalVisible(true);
  };

  const handleOk = () => {
    localStorage.setItem("view", visibilityMode);
    window.location.href = "/";
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
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Save This Settings and Refresh Page
          </Button>,
        ]}
      >
        How do you want to view clip cards?
        <br></br>
        <Select
          defaultValue="viewDecrypt"
          value={visibilityMode}
          style={{ width: 250 }}
          onChange={(e) => {
            setvisibilityMode(e);
          }}
        >
          <Option value="viewDecrypt">View Decrypted</Option>
          <Option value="hoverDecrypt">Decrypted view only on hover</Option>
        </Select>
        <br></br>
        <Text type="secondary" style={smallText}>
          These settings are local to this device only.(You need to refresh the
          page in order for settings to take effect.)
        </Text>
      </Modal>
    </>
  );
}
