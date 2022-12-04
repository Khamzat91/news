import React from "react";
import Layout from "../layout/Layout";
import registrationBtn from "../../images/content/registrationBtn.svg";
import { Button, Checkbox, Form, Input } from "antd";
import { ReactComponent as EyeClose } from "../../images/content/eyeClose.svg";
import { ReactComponent as EyeOpen } from "../../images/content/eyeOpen.svg";
import "./index.scss";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img
              src={registrationBtn}
              alt=""
              className="registration__top-exit"
            />
          </Link>
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
              name="E-mail"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'Не правильно ввели E-mail!',
                },
                {
                  required: true,
                  message: 'Пожалуйста, введите ваш E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Имя и фамилия"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите ваше имя и фамилию!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
             name="password"
             label="Пароль"
             dependencies={['password']}
             hasFeedback
             rules={[
               {
                 required: true,
                 message: 'Пожалуйста, введите свой пароль!',
               },
               ({ getFieldValue }) => ({
                 validator(_, value) {
                   if (!value || getFieldValue('password') === value) {
                     return Promise.resolve();
                   }
                   return Promise.reject(new Error('The two passwords that you entered do not match!'));
                 },
               }),
             ]}
            >
              <Input.Password
                iconRender={(visible) => (visible ? <EyeOpen /> : <EyeClose />)}
              />
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
