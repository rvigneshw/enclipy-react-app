import React from "react";
import { Menu, Switch, Button, Input } from "antd";
import {
  UserOutlined,
  PlusCircleTwoTone,
  SearchOutlined,
  SettingOutlined,
  LockOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

import ClipBoardModal from "./ClipBoardModal";
import SettingsModal from "./SettingsModal";
import ProfileModal from "./ProfileModal";

import ToggleButton from "./ToggleButton";
const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = (value) => console.log(value);

export default class AppHeader extends React.Component {
  state = {
    current: "mail",
    themeMode: "light",
    searchOpen: false,
  };

  changeTheme = (e) => {
    this.setState({ themeMode: e.value ? "dark" : "light" });
  };
  handleSearchOn = (e) => {
    this.setState({ searchOpen: !this.state.searchOpen });
  };
  render() {
    const { current } = this.state;
    // if (this.state.searchOpen) return <AppHeaderSearchOn />;
    if (this.state.searchOpen) {
      return (
        <AppHeaderSearchOn handleSearchOn={this.handleSearchOn.bind(this)} />
      );
    }

    if (!localStorage.getItem("jwt")) return <AppHeaderNotLoggedIn />;

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
        </Col>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          <SettingsModal />
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
            onClick={this.handleSearchOn}
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

function AppHeaderNotLoggedIn(props) {
  return (
    <Row justify="center" style={{ marginTop: 2, background: "#FFF" }}>
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
          icon={<LockOutlined />}
          size="large"
        />
      </Col>
      <Col
        xs={{ span: 15 }}
        sm={{ span: 12 }}
        md={{ span: 6 }}
        lg={{ span: 3 }}
        xl={{ span: 3 }}
      >
        <Button type="primary" shape="round" block size="large">
          Enclipy
        </Button>
      </Col>
    </Row>
  );
}
function AppHeaderSearchOn(props) {
  return (
    <Row justify="center" style={{ marginTop: 2, background: "#FFF" }}>
      <Col
        xs={{ span: 15 }}
        sm={{ span: 12 }}
        md={{ span: 6 }}
        lg={{ span: 3 }}
        xl={{ span: 3 }}
      >
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          shape="round"
          size="large"
          enterButton
        />
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
          icon={<CloseOutlined />}
          size="large"
          onClick={props.handleSearchOn}
        />
      </Col>
    </Row>
  );
}
