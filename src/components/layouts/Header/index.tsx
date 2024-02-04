import { NavLink } from "react-router-dom";
import { Layout, Image, Typography, Button } from 'antd';
import {
  LoginOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { AppRoutes } from "../../../lib/const";
import style from "./style.module.css";

const { Header } = Layout;
const IMAGE_URL = "https://masterpiecer-images.s3.yandex.net/c6916e0d742b11eeaead5696910b1137:upscaled";

export default function PageHeader() {
  return (
    <Header className={style.PageHeader}>
      <NavLink to={AppRoutes.MAIN} className={style.navLink}>
        <Image
          className={style.logo}
          width={80}
          src={IMAGE_URL}
        />
        <Typography.Title className={style.title}>SPACEFLIGHT NEWS</Typography.Title>
      </NavLink>

      {/* будет отрисовка по условию: залогинен или нет*/}
      <div className={style.user_block}>
        <NavLink to={AppRoutes.LOGIN}>
          <Button className={style.button} icon={<LoginOutlined />}>
            LOGIN
          </Button>
        </NavLink>
        <NavLink to={AppRoutes.SIGNUP}>
          <Button className={style.button} icon={<LoginOutlined />}>
            SIGN UP
          </Button>
        </NavLink>
      </div>

      {/* будет отрисовка по условию: залогинен или нет*/}

      {/* <div className={style.user_block}>
          <NavLink to='#'>
            <Button className={style.button} icon={<UserOutlined />}>
              PROFILE
            </Button>
          </NavLink>
          <NavLink to={AppRoutes.home}>
            <Button
              className={style.button}
              // onClick={logoutHandler}
              icon={<LogoutOutlined className={style.button} />}
            >
              LOGOUT
            </Button>
          </NavLink>
        </div> */}

    </Header >
  );
}
