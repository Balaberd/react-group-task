import { useContext } from "react";
import style from "./style.module.css";
import { AuthorsContext } from "../../app/App";
import { ProjectAuthor } from "../../../lib/types/ProjectAutor";

export default function Footer() {
  const authors = useContext(AuthorsContext)

  return (
    <footer className={style.Header}>
      {authors
        && authors.map(({ nickname, link }) => (
          <a className={style.link} href={link}>{nickname}</a>
        ))}
    </footer>);
}
