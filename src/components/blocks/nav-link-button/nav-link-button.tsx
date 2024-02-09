import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

import style from "./style.module.css";

type Props = {
  navLink: string;
  icon?: React.ReactNode;
  name: string;
};

const NavLinkButton: React.FC<Props> = ({ navLink, icon, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navLink);
  }

  return (
    <Button
      className={style.button}
      type="primary"
      icon={icon}
      onClick={handleClick}
    >
      {name}
    </Button>
  )
}
export default NavLinkButton;