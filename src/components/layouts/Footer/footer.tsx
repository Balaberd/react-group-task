import { useContext } from "react";
import style from "./style.module.css";
import { AuthorsContext } from "../../app/app";
import { ProjectAuthor } from "../../../lib/types/ProjectAutor";

const Footer = () => {
  const authors = useContext(AuthorsContext)

  return (
    <footer className={style.Header}>
      {authors
        && authors.map(({ nickname, link }) => (
          <a key={nickname} className={style.link} href={link}>{nickname}</a>
        ))}
    </footer>);
}

export default Footer;