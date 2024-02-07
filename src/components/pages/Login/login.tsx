import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { AppRoutes } from "../../../lib/types/AppRoutes";
import FormInput from "../../blocks/form-items/form-input";
import FormInputPassword from "../../blocks/form-items/form-input-password";
import style from "./style.module.css";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userError, setUserError] = useState(false)

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setUserError(false)
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setUserError(false)
  };

  const onLogin = async (value: {
    email: string;
    password: string;
  }) => {
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      className={style.login}
      labelCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onLogin}
    >
      <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
        <NavLink to={AppRoutes.Main}>
          <CloseCircleOutlined className={style.close_button} />
        </NavLink>
      </Form.Item>

      <FormInput
        userError={userError}
        email={email}
        onEmailChange={onEmailChange}
      />
      <FormInputPassword
        name="password"
        label={"Password"}
        userError={userError}
        password={password}
        message={"Please input your password!"}
        onPasswordChange={onPasswordChange}
      />
      <Form.Item wrapperCol={{ offset: 8, span: 14, }} >
        <Button htmlType="submit" className={style.login_button}>
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  )
}


export default Login;