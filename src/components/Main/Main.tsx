import styles from "./Main.module.css"
import Product from "../Product"

function Main() {
  return (
    <main className={styles.wrapper}>
      <ul className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </main>
  )
}

export default Main
