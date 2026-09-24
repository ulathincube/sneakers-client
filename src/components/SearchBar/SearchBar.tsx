import styles from "./SearchBar.module.css"

function SearchBar() {
  return (
    <article className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="search"
            className={styles.field}
            placeholder="Vans sneakers"
          />
        </div>
      </form>
    </article>
  )
}

export default SearchBar
