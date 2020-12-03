import React from "react";
import { Menu, Switch } from "antd";
import { UserOutlined, PlusCircleTwoTone } from "@ant-design/icons";
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
      <Row>
        <Col span={6}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme={this.state.themeMode}
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
          >
            <SubMenu
              key="SubMenu"
              icon={<UserOutlined />}
              title=" Welcome, Vigneshwaran"
            >
              <Menu.Item key="setting:1">Edit Profile</Menu.Item>
              <Menu.Item key="setting:2">Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={6} offset={12}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme={this.state.themeMode}
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
          >
            <Menu.Item key="app">
              <ClipBoardModal
                data={this.props.data}
                refetch={this.props.refetch}
              />
            </Menu.Item>
            {/* <SubMenu key="SubMenu" icon={<PlusCircleTwoTone />}> */}
            {/*   <Menu.Item key="addFromClip"> */}
            {/*      */}
            {/*   </Menu.Item> */}
            {/*   <Menu.Item key="enterText">Enter Text</Menu.Item> */}
            {/* </SubMenu> */}
          </Menu>
        </Col>
      </Row>
    );
  }
}
