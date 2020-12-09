import React from "react";
import { Menu, Switch, Button } from "antd";
import {
  UserOutlined,
  PlusCircleTwoTone,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

import ClipBoardModal from "./ClipBoardModal";
import SettingsModal from "./SettingsModal";
import ProfileModal from "./ProfileModal";

import ToggleButton from "./ToggleButton";
const { SubMenu } = Menu;

export default class AppHeader extends React.Component {
  state = {
    current: "mail",
    themeMode: "light",
  };

  
  changeTheme = (e) => {
    this.setState({ themeMode: e.value ? "dark" : "light" });
  };

  render() {
    const { current } = this.state;

    return (
      <Row justify="center" style={{ marginTop: 2, background: "#FFF" }}>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          <ProfileModal />
          {/* <Button */}
          {/*   type="primary" */}
          {/*   shape="circle" */}
          {/*   icon={<UserOutlined />} */}
          {/*   size="large" */}
          {/* /> */}
        </Col>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          <SettingsModal />
          {/* <Button */}
          {/*   type="primary" */}
          {/*   shape="circle" */}
          {/*   icon={<SettingOutlined />} */}
          {/*   size="large" */}
          {/* /> */}
        </Col>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Col>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          <ClipBoardModal />
        </Col>
      </Row>
    );
  }
}
