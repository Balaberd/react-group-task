import { NavLink } from "react-router-dom";
import { Layout } from 'antd';
import {
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import NavLinkButton from "../../blocks/nav-link-button/nav-link-button";

import style from "./style.module.css";
import { AppRoutes } from "../../../lib/types/AppRoutes";
import Logo from "../../blocks/logo/logo";

const { Header } = Layout;

const PageHeader = () => {

  const logoutHandler = () => {
  };

  return (
    <Header className={style.PageHeader}>
      <NavLink to={AppRoutes.Main} className={style.navLink}>
        <Logo />
      </NavLink>
      {/* будет отрисовка по условию: залогинен или нет*/}
      <div className={style.user_block}>
        <NavLinkButton
          navLink={AppRoutes.Login}
          name="LOGIN"
          icon={<LoginOutlined />}
        />
        <NavLinkButton
          navLink={AppRoutes.Signup}
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

export default PageHeader;