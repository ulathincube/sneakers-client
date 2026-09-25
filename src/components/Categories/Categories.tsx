import styles from "./Categories.module.css"
import { Link } from "react-router"

function Categories() {
  return (
    <article className={styles.wrapper}>
      <ul className={styles.categories}>
        <li className={styles.category}>
          <Link to="/" className={styles.link}>
            Men
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/" className={styles.link}>
            Women
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/brands" className={styles.link}>
            Brands
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/" className={styles.sale}>
            Sale
          </Link>
        </li>
      </ul>
    </article>
  )
}

export default Categories
