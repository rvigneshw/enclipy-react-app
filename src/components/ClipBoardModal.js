import { Modal, Button } from "antd";
import React, { useState, useEffect } from "react";
import { Input } from "antd";

export default function ClipBoardModal(props) {
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clipBoardText, setclipBoardText] = useState("");
  const [visible, setVisible] = useState(false);
  navigator.clipboard
    .readText()
    .then((text) => {
      setclipBoardText(text);
      console.log(text);
      // let oldList = this.props.data;
      // this.props.setData(
      //   oldList.concat({
      //     title: text,
      //   })
      // );
      // console.log(oldList);
    })
    .catch((err) => {
      console.log(err);
      setError(true);
    });
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onChange = ({ target: { value } }) => {
    console.log("v" + value);
    setclipBoardText(value);
  };
  let insideContent;
  if (error) {
    insideContent = <p>Some Error Occuerd</p>;
  } else {
    insideContent = (
      <TextArea
        value={clipBoardText}
        onChange={onChange}
        autoSize={{ minRows: 3, maxRows: 15 }}
      />
    );
  }
  useEffect(() => {
    if (error) {
      insideContent = <p>Some Error Occuerd</p>;
    } else {
      insideContent = (
        <TextArea
          value={clipBoardText}
          onChange={onChange}
          autoSize={{ minRows: 3, maxRows: 15 }}
        />
      );
    }
  }, [clipBoardText]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add data from Clipboard
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add this Clip
          </Button>,
        ]}
      >
        {insideContent}
      </Modal>
    </>
  );
}
