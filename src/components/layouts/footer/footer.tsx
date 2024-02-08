import { useContext } from "react";
import style from "./style.module.css";
import { AuthorsContext } from "../../app/app";
import { ProjectAuthor } from "../../../lib/types/ProjectAuthor";

export default function Footer() {
  const authors = useContext(AuthorsContext)

  return (
    <footer className={style.Header}>
      {authors
        && authors.map(({ nickname, link }) => (
          <a className={style.link} href={link} key={nickname}>{nickname}</a>
        ))}
    </footer>);
}
