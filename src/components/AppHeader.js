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
import ToggleButton from "./ToggleButton";
const { SubMenu } = Menu;

export default class AppHeader extends React.Component {
  state = {
    current: "mail",
    themeMode: "light",
  };

  handleClick = (e) => {
    switch (e.key) {
      case "enterText":
        let oldList2 = this.props.data;
        this.props.setData(
          oldList2.concat({
            title: "Title enterText",
          })
        );
        break;

      default:
        break;
    }
  };

  changeTheme = (e) => {
    this.setState({ themeMode: e.value ? "dark" : "light" });
  };

  render() {
    const { current } = this.state;

    return (
      <Row justify="center">
        <Col xs={{ span: 4 }} lg={{ span: 1 }}>
          <Button
            type="primary"
            shape="circle"
            icon={<UserOutlined />}
            size="large"
          />
        </Col>
        <Col xs={{ span: 4 }} lg={{ span: 1 }}>
          <Button
            type="primary"
            shape="circle"
            icon={<SettingOutlined />}
            size="large"
          />
        </Col>
        <Col xs={{ span: 4 }} lg={{ span: 1 }}>
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Col>
        <Col xs={{ span: 4 }} lg={{ span: 1 }}>
          <ClipBoardModal data={this.props.data} refetch={this.props.refetch} />
        </Col>
      </Row>
    );
  }
}
