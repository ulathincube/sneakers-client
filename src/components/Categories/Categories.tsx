import styles from "./Categories.module.css"
import { Link } from "react-router"
import { motion } from "motion/react"

function Categories() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <ul className={styles.categories}>
        <li className={styles.category}>
          <Link to="/mens" className={styles.link}>
            Men
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/womens" className={styles.link}>
            Women
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/brands" className={styles.link}>
            Brands
          </Link>
        </li>
        <li className={styles.category}>
          <Link to="/sale" className={styles.sale}>
            Sale
          </Link>
        </li>
      </ul>
    </motion.article>
  )
}

export default Categories
