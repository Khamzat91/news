import React from "react";
import { Button, Form, Input } from "antd";
import Layout from "../layout/Layout";
import { ReactComponent as LoginBtn } from "../../images/content/loginBtn.svg";
import { ReactComponent as EyeClose } from "../../images/content/eyeClose.svg";
import { ReactComponent as EyeOpen } from "../../images/content/eyeOpen.svg";
import "./index.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <div className="login">
        <div className="login__top">
          <div className="login__title">Вход в аккаунт</div>
          <Link to="/">
            <LoginBtn className="login__topbtn" />
          </Link>
        </div>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              iconRender={(visible) => visible ? <EyeOpen /> : <EyeClose />}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Войти</Button>
           <Link to="/registration">
           <button className="login_regist">Зарегистрироваться</button>
           </Link> 
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
