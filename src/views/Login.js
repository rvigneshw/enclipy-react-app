import React from "react";
import { Row, Col, Card, Typography, Carousel, Image } from "antd";
import {
  GoogleOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import AppHeader from "../components/AppHeader";
import { Layout } from "antd";
const contentStyle = {
  color: "#17B1F9",
  textAlign: "center",
};
const introStyle = {
  height: '150px',
  color: '#17B1F9',
  textAlign: 'center',
  fontSize:27
};
function Login() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

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
          <Col span={24}>
            <Title level={3}>Hi there, Welcome to Enclipy!</Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 24 }}
          >
            <Carousel autoplay >
              <div>
                  <Title style={introStyle}>
              Enclipy is an end-to-end encrypted text clips sharing platform,
              you can add clips and access them anywhere from any of your
              devices, all with total privacy.
            </Title>  
              </div>
              <div>
                <Image width={300} src="/todo.svg" />
                <h3 style={contentStyle}>Securely store your clips</h3>
              </div>
              <div>
                <Image width={300} src="/taking_notes.svg" />
                <h3 style={contentStyle}>Manage your clips with ease</h3>
              </div>
              <div>
                <Image width={300} src="/my_files.svg" />
                <h3 style={contentStyle}>Your data is encrypted</h3>
              </div>
              <div>
                <Image width={300} src="/personal_notebook.svg" />
                <h3 style={contentStyle}>It's your personal notebook</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        
            <Row justify="center">
              <Col xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}>
                <Card bordered={false} hoverable>
                  <Image height={150} src="/login.svg" />
                  <Title level={5}>
                    If you already have an account <UserSwitchOutlined />
                  </Title>
                  <a href="https://enclipy-api.herokuapp.com/connect/google">
                    <Button type="primary" icon={<GoogleOutlined />} size="large" block shape="round">
                      Sign In with Google
                    </Button>
                  </a>
                </Card>
              </Col>
              <Col xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}>
                <Card bordered={false} hoverable>
                  <Image height={150} src="/join.svg" /> 
                  <Title level={5}>
                    If you're new <UserAddOutlined />
                  </Title>
                  <a href="https://enclipy-api.herokuapp.com/connect/google">
                    <Button type="primary" icon={<GoogleOutlined />} size="large" block shape="round">
                      Sign Up with Google
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
