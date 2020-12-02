import React from "react";
import { Radio, Button } from "antd";

export default class ToggleButton extends React.Component {
  state = {
    darkMode: false,
  };

  changeTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  render() {
    return (
        <Button
          type="primary"
          onClick={this.changeTheme}
          style={{ marginTop: 16 }}
        >
          {this.state.darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
    );
  }
}
