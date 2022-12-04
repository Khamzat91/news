import React from "react";
import { Button, Form, Input } from "antd";
import Layout from "../layout/Layout";
import { ReactComponent as LoginBtn } from "../../images/content/loginBtn.svg";
import { ReactComponent as EyeClose } from "../../images/content/eyeClose.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as EyeOpen } from "../../images/content/eyeOpen.svg";
import { setUserData } from "../../redux/action/user";
import "./index.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitLogin = () => {
    const data = {email, password}
    dispatch(setUserData(data, 'login'))
    
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

        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="email"
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
            <Input value={email} onChange={handleChangeEmail} />
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
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={onSubmitLogin} htmlType="submit">Войти</Button>
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
