import React from "react";
import { Form, Input } from 'antd';

type Props = {
  userError: boolean;
  email: string;
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
};

const FormInput: React.FC<Props> = (props) => {
  return (
    <Form.Item
      label="Email"
      name="email"
      validateStatus={props.userError ? "error" : "validating"}
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input value={props.email} onChange={props.onEmailChange} />
    </Form.Item>
  )
}

export default FormInput;