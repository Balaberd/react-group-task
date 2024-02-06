import React from "react";
import { Form, Input } from 'antd';
import { Rule } from "antd/es/form";

type Props = {
  label: string;
  name: string;
  userError: boolean;
  password: string;
  dependencies?: string[];
  message: string;
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  validatePassword?: Rule | undefined;
};

const FormInputPassword: React.FC<Props> = (props) => {

  const rules: Rule[] = [
    { required: true, message: props.message },
    ...(props.validatePassword ? [props.validatePassword] : [])
  ];

  return (
    <Form.Item
      label={props.label}
      name={props.name}
      validateStatus={props.userError ? "error" : "validating"}
      rules={rules}
    >
      <Input.Password
        value={props.password}
        allowClear
        onChange={props.onPasswordChange}        
      />
    </Form.Item>
  )
}

export default FormInputPassword;
