import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";

import FormInput from "../../blocks/FormItems/FormInput";
import FormInputPassword from "../../blocks/FormItems/FormInputPassword";
import { AppRoutes } from "../../../lib/const";
import style from "./style.module.css";


export default function Login() {

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
      <Form.Item wrapperCol={{ offset: 24, span: 3 }}>
        <NavLink to={AppRoutes.MAIN}>
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