import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { AES } from "crypto-js";

const backendUrl = "https://enclipy-api.herokuapp.com";
const encryptText = (text,token) => {
    return AES.encrypt(text, token).toString();
};
const LoginRedirect = (props) => {
  const [text, setText] = useState("Loading...");
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/auth/google/callback${location.search}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
        
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("user", encryptText(JSON.stringify(res.user),res.jwt));

        setText(
          "You have been successfully logged in. You will be redirected in few seconds..."
        );
        setTimeout(() => history.push("/"), 2000); // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please try again after some time.");
        setTimeout(() => history.push("/"), 2000);
      });
  }, [history, location.search, params.providerName]);

  return (
    <Result
      icon={<SmileOutlined />}
      title={text}
    />
  );
};

export default LoginRedirect;
