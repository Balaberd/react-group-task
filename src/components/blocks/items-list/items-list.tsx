import styles from "./style.module.css"

type Props = {
  results: React.ReactElement[];
  isLoading: boolean;
};

const ItemsList: React.FC<Props> = (props) => {
  return (
    <>
      {
        props.results.length >= 0 && <ul className={styles.items}>{props.results}</ul>
      }
    </>
  )
}

export default ItemsList;