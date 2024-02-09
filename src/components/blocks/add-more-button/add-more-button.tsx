import styles from "./style.module.css"

type Props = {
  handleAddMore?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  nextArticlesURL: string;
  isLoading: boolean;
};

const AddMoreButton: React.FC<Props> = (props) => {
  return (
    <>
      {props.nextArticlesURL &&
        <button
          className={styles.addButton}
          onClick={props.handleAddMore}
          disabled={props.isLoading}
        >
          {!props.isLoading ? "Know more" : "Await..."}
        </button>
      }
    </>
  )
}

export default AddMoreButton