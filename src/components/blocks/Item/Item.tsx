import { NavLink } from 'react-router-dom';
import styles from "./style.module.css"
import { articleDataInterface } from "../../../lib/types/articlesData"

export default function Item(data: articleDataInterface, nav: any) {
  return (
    <li key={data.id} className={styles.item} onClick={() => nav(`/report/${data.id}`)}>
      <NavLink to={`/report/${data.id}`} className={styles.itemLink} >
        <img className={styles.itemImg}
          src={data.image_url}
          alt={data.title} />
        <h2 className={styles.itemTitle}>{data.title}</h2>
      </NavLink>
    </li>
  )
}