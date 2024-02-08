import styles from "./style.module.css"

type Props = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  querySearch?: string;
  results: React.ReactElement[];
  isLoading: boolean;
};

const Panel: React.FC<Props> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <h1 className={styles.formTitle}>
        Would you like to know more?
      </h1>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="articleInput"
          value={props.querySearch}
          onChange={props.handleChange}
        />
      </label>
      <p className={styles.statusMessage}>
        {
          props.isLoading ? "Await..." :
            props.results.length === 0 && !props.isLoading ? "No result" : ""
        }
      </p>
    </form>
  )
}

export default Panel;