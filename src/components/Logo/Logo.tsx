import styles from "./Logo.module.css"
import { Link } from "react-router"

function Logo() {
  return (
    <article className={styles.wrapper}>
      <Link className={styles.link} to="/">
        Sneakers
      </Link>
    </article>
  )
}

export default Logo
