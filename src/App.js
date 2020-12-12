import React from "react";
import { Layout } from "antd";


import AppRouter from "./AppRouter";


import "./App.css";



const App = () => {

  return (
    <div className="App">
      <Layout className="layout" style={{ background: "#FFF" }}>
        <AppRouter />

        {/* <Footer */}
        {/*   style={{ */}
        {/*     position: "sticky", */}
        {/*     bottom: "0", */}
        {/*     height: "50px", */}
        {/*     padding: "0px", */}
        {/*     background: "#FFFFFF00", */}
        {/*   }} */}
        {/* > */}
        {/*    */}
        {/* </Footer> */}
      </Layout>
    </div>
  );
};

export default App;
