import { Typography } from 'antd';

import style from "./style.module.css";

const IMAGE_URL = "https://masterpiecer-images.s3.yandex.net/c6916e0d742b11eeaead5696910b1137:upscaled";

export default function Logo() {
  return (
    <>
      <img
        className={style.logo}
        width={60}
        src={IMAGE_URL}
      />
      <Typography.Title className={style.title}>Spaceflight News</Typography.Title>
    </>
  );
}
