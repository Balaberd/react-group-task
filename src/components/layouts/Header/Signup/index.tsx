import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { AppRoutes } from "../../../../lib/const";

import style from "./style.module.css";
import FormInput from "../FormItems/FormInput";
import FormInputPassword from "../FormItems/FormInputPassword";

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [userError, setUserError] = useState(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setUserError(false);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setUserError(false);
  };
  
  const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
    setUserError(false);
  };

  const validatePassword = {
  };
  
  const onSignup = async (value: {
    email: string;
    password: string;
  }) => {
  }

  return (
    <>
      <Form
        className={style.login}
        labelCol={{ span: 7 }}
        initialValues={{ remember: true }}
        onFinish={onSignup}
      >
        <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
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
          name={"password"}
          label={"Password"}
          userError={userError}
          password={password}
          message={"Please input your password!"}
          onPasswordChange={onPasswordChange}
        />
        <FormInputPassword
          name={"repeatpassword"}
          label={"Repeat password"}
          password={repeatPassword}
          userError={userError}
          dependencies={["password"]}
          message={"Please repeat your password!"}
          onPasswordChange={onRepeatPasswordChange}
          validatePassword={validatePassword}
          />
        <Form.Item wrapperCol={{ offset: 13}}>
          <Button htmlType="submit" className={style.login_button}>
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}