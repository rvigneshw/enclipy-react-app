import React, { useState } from "react";
import { Layout } from "antd/lib";

import "./App.css";
import AppHeader from "./components/AppHeader";
import AppRouter from "./AppRouter";
const demo = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

const App = () => {
  const { Header, Content, Footer } = Layout;
  const [data, setData] = useState(demo);
  return (
    <div className="App">
      <Layout className="layout">
        <AppHeader setData={setData} data={data} />
        <Content style={{ padding: "0 10px", marginTop: 64, height: "100%" }}>
          <AppRouter setData={setData} data={data} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
