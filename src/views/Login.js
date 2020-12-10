import React from "react";
import { Row, Col, Card } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import AppHeader from "../components/AppHeader";
import { Layout } from "antd";
function Login() {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <AppHeader />
      <Content
        style={{
          padding: "0 10px",
          marginTop: 20,
          height: "100%",
        }}
      >
        <Row justify="center">
          <Col span={6}>
            <Card bordered={false} hoverable>
              <p>Card content</p>
              <p>Card content</p>
              <a href="https://enclipy-api.herokuapp.com/connect/google">
                <Button type="primary" icon={<GoogleOutlined />}>
                  Login with Google
                </Button>
              </a>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} hoverable>
              <p>Card content</p>
              <p>Card content</p>
              <a href="https://enclipy-api.herokuapp.com/connect/google">
                <Button type="primary" icon={<GoogleOutlined />}>
                  Login with Google
                </Button>
              </a>
            </Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default Login;
