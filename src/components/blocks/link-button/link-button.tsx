import React from 'react';
import { Button } from 'antd';

import style from "./style.module.css";

type Props = {
  navLink: string;
  icon?: React.ReactNode;
  name: string;
  onClick?: () => void;
};

const LinkButton: React.FC<Props> = ({ navLink, icon, name }) => {
  return (
    <Button
      className={style.button}
      type="primary"
      href={navLink}
      icon={icon}
    >
      {name}
    </Button>
  )
}
export default LinkButton;