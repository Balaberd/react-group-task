import { NavLink } from "react-router-dom";
import { Layout } from 'antd';
import {
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';


import Logo from "../../blocks/Logo/Logo";
import LinkButton from "../../blocks/LinkButton/LinkButton";

import { AppRoutes } from "../../../lib/const";
import style from "./style.module.css";

const { Header } = Layout;

export default function PageHeader() {

  const logoutHandler = () => {
  };

  return (
    <Header className={style.PageHeader}>
      <NavLink to={AppRoutes.MAIN} className={style.navLink}>
        <Logo />
      </NavLink>
      {/* будет отрисовка по условию: залогинен или нет*/}
      <div className={style.user_block}>
        <LinkButton
          navLink={AppRoutes.LOGIN}
          name="LOGIN"
          icon={<LoginOutlined />}
        />
        <LinkButton
          navLink={AppRoutes.SIGNUP}
          name="SIGN UP"
          icon={<UserAddOutlined />}
        />
      </div>
      {/* будет отрисовка по условию: залогинен или нет*/}
      {/* <div className={style.user_block}>
        <LinkButton
          navLink="#"
          name="PROFILE"
          icon={<UserOutlined />}
        />
        <LinkButton
          navLink={AppRoutes.MAIN}
          name="LOGOUT"
          icon={<LogoutOutlined className={style.button} />}
          onClick={logoutHandler}
        />
      </div> */}
    </Header >
  );
}
