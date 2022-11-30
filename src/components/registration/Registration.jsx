import React from "react";
import Layout from "../layout/Layout";
import registrationBtn from "../../images/content/registrationBtn.svg";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.scss";

const Registration = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <div className="registration">
        <div className="registration__top">
          <div className="registration__top-title">Регистрация</div>
          <img
            src={registrationBtn}
            alt=""
            className="registration__top-exit"
          />
        </div>
        <div className="registration__inner">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Не правильно ввели email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Имя и фамилия"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Не правильно ввели имя и фамилию!",
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
                  message: "Не правильно ввели пароль!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
              Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
