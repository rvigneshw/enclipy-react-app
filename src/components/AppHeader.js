import React from "react";
import { Button, Input } from "antd";
import {
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

import ClipBoardModal from "./ClipBoardModal";
import SettingsModal from "./SettingsModal";
import ProfileModal from "./ProfileModal";


export default class AppHeader extends React.Component {
  state = {
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
    // if (this.state.searchOpen) return <AppHeaderSearchOn />;
    if (this.state.searchOpen) {
      return (
        <AppHeaderSearchOn
          searchString={this.props.searchString}
          setsearchString={this.props.setsearchString}
          handleSearchOn={this.handleSearchOn.bind(this)}
        />
      );
    }
    if (this.props.loading) {
      return <AppHeaderLoading />;
    }
    if (!localStorage.getItem("jwt")) {
      return <AppHeaderNotLoggedIn />;
    }

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
        xs={{ span: 24 }}
        sm={{ span: 20 }}
        md={{ span: 8 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
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
        <Input
          placeholder="input search text"
          value={props.searchString}
          onChange={({ target: { value } }) => {
            props.setsearchString(value);
          }}
          shape="round"
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
        <Button
          type="primary"
          shape="circle"
          icon={<CloseOutlined />}
          size="large"
          onClick={() => {
            props.handleSearchOn();
            props.setsearchString("");
          }}
        />
      </Col>
    </Row>
  );
}

function AppHeaderLoading(props) {
  return (
    <Row justify="center" style={{ marginTop: 2, background: "#FFF" }}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 20 }}
        md={{ span: 8 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Button type="primary" shape="round" block size="large" loading>
          Enclipy
        </Button>
      </Col>
    </Row>
  );
}
