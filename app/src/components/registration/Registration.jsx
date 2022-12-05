import React from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import registrationBtn from "../../images/content/registrationBtn.svg";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ReactComponent as EyeClose } from "../../images/content/eyeClose.svg";
import { ReactComponent as EyeOpen } from "../../images/content/eyeOpen.svg";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/action/user";

const Registration = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const handleChangeFullName = (e) => {
    setFullName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitRegister = () => {
    const data = { email, password, fullName };
    dispatch(setUserData(data, "register", navigate ));
    
  };

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
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onSubmitRegister}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="E-mail"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "Не правильно ввели E-mail!",
                },
                {
                  required: true,
                  message: "Пожалуйста, введите ваш E-mail!",
                },
              ]}
            >
              <Input value={email} onChange={handleChangeEmail} placeholder="E-mail"/>
            </Form.Item>

            <Form.Item
              label="Имя и фамилия"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите ваше имя и фамилию!",
                },
              ]}
            >
              <Input value={fullName}
              onChange={handleChangeFullName}
                placeholder="Имя и фамилия"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите свой пароль!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                value={password}
                onChange={handleChangePassword}
                iconRender={(visible) => (visible ? <EyeOpen /> : <EyeClose />)}
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
              >
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
