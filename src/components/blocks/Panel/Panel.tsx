import styles from "./style.module.css"

type Props = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  queryValue?: string;
  results: React.ReactElement[];
  isLoading: boolean;
};

const Panel: React.FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.sectionTitle}>
        О чем вы хотите узнать?
      </h1>
      <form onSubmit={props.handleSubmit} className={styles.form}>
        <label className={styles.inputLabel}>
          <input
            className={styles.input}
            type="text"
            name="article"
            value={props.queryValue}
            onChange={props.handleChange}
          />
        </label>
      </form>
      {(props.isLoading) ? <p>Ищем</p> :
        (props.results.length === 0 && !props.isLoading) ? <p>Ничего не найдено</p> : null
      }
    </>
  )
}

export default Panel;