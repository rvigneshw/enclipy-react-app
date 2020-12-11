import { Modal, Button, Tooltip, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Descriptions } from "antd";
import { AES } from "crypto-js";

import { CREATE_CLIP, GET_MY_CLIPS } from "../GraphqlQueries";

export default function ProfileModal(props) {
  const { Title, Text } = Typography;
  const [modalVisible, setmodalVisible] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

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
        <Title level={5}>
          Signed in as {user.username}{" "}
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
        </Title>

        <ProfileScreen user={user} />
        <Text type="secondary">
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
        <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Provider">{user.provider}</Descriptions.Item>
        {/* <Descriptions.Item label="Total Clips"> */}
        {/*   {user.clips.length} */}
        {/* </Descriptions.Item> */}
      </Descriptions>
    </div>
  );
};
