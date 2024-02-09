import style from "./style.module.css";

const IMAGE_URL = "https://masterpiecer-images.s3.yandex.net/c6916e0d742b11eeaead5696910b1137:upscaled";

const Logo = () => {
  return (
    <div className={style.Logo}>
      <img
        className={style.image}
        width={50}
        height={50}
        src={IMAGE_URL}
        alt="логотип"
      />
      <h2 className={style.title}>Spaceflight News</h2>
    </div>
  );
}

export default Logo;