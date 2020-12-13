import { Modal, Button, Tooltip, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Descriptions } from "antd";
import { AES, enc } from "crypto-js";

const smallText = {
  fontSize: 10,
};
const decryptText = (text) => {
  var bytes = AES.decrypt(text, localStorage.getItem("jwt"));
  var originalText = bytes.toString(enc.Utf8);
  return originalText;
  // return text;
};
export default function ProfileModal(props) {
  const { Text } = Typography;
  const [modalVisible, setmodalVisible] = useState(false);

  const user = JSON.parse(decryptText(localStorage.getItem("user")));

  const showModal = () => {
    setmodalVisible(!modalVisible);
  };

  return (
    <>
      <Tooltip title="Your Profile">
        <Button
          shape="circle"
          type="primary"
          onClick={showModal}
          size="large"
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Modal
        visible={modalVisible}
        onCancel={showModal}
        title="Your Profile"
        footer={[
          <Button key="submit" type="primary" onClick={showModal}>
            Ok
          </Button>,
        ]}
      >
        <ProfileScreen user={user} />
        <Text type="secondary" style={smallText}>
          These are the only details we have about you other than your encrypted
          clips.
        </Text>
      </Modal>
    </>
  );
}

const ProfileScreen = ({ user }) => {
  return (
    <div>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Username">
          {user.username}
          <Button
            danger
            shape="round"
            icon={<UserOutlined />}
            type="text"
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("jwt");
              localStorage.removeItem("username");
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Logout
          </Button>
        </Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Provider">{user.provider}</Descriptions.Item>
        {/* <Descriptions.Item label="Total Clips"> */}
        {/*   {user.clips.length} */}
        {/* </Descriptions.Item> */}
      </Descriptions>
    </div>
  );
};
