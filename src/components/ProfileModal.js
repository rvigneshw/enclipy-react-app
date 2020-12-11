import { Modal, Button, Tooltip, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Descriptions } from "antd";
import { AES } from "crypto-js";

import { CREATE_CLIP, GET_MY_CLIPS } from "../GraphqlQueries";

export default function ProfileModal(props) {
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
        <ProfileScreen user={user} />
      </Modal>
    </>
  );
}

const ProfileScreen = ({ user }) => {
  return (
    <div>
      <Descriptions title="Profile Details" bordered column={1}>
        <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Provider">{user.provider}</Descriptions.Item>
        <Descriptions.Item label="Total Clips">
          {user.clips.length}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
