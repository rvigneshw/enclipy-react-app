import React,{useState} from "react";
import { Card, List } from "antd";
import { Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AES, enc } from "crypto-js";


const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 5,
  xxl: 6,
};

const ClipCard=(props)=>{
  
  const [editable,setEditable]=useState(true);
  const [viewDecrypted,setViewDecrypted]=useState(false);

  const handleClick = (e) => {
  }
  const handleMouseOver = (e) => {
    setViewDecrypted(true)
  }
  const handleMouseOut = (e) => {
    setViewDecrypted(false)
  }
  const decryptText=(text)=> {
  var bytes = AES.decrypt(text, "SECRET_TOKEN");
  var originalText = bytes.toString(enc.Utf8);
  return originalText;
}
const encryptText=(text)=> {
    var encrypted_data = AES
      .encrypt(text, "SECRET_TOKEN").toString();
  }
  return (
    <Card
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      title="Default size card"
      hoverable
      style={{ margin: "0px" }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" onClick={e => {setEditable(!editable)}}/>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    > 
    {viewDecrypted?<p>decrypted</p>:<p>encrypted</p>}
      {editable?<p>{props.data}</p>:
      <textarea>alala</textarea>}
    </Card>
  );
}
export default function CardList(props){
  return (
    <List
      grid={gridConfig}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <ClipCard data={item.title}/>
        </List.Item>
      )}
    />
  );
}
