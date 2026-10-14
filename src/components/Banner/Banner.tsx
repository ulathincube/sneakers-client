import styles from "./Banner.module.css"
import { Link } from "react-router"
import { motion } from "motion/react"

function Banner() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <section className={styles.actions}>
        <div className={styles.details}>
          <h2 className={styles.title}>Nike x Adidas</h2>
          <p className={styles.description}>
            Get the freshest pairs of sneakers in town!
          </p>
        </div>
        <div className={styles.container}>
          <Link to="/" className={styles.link}>
            Let's Go
          </Link>
        </div>
      </section>
    </motion.article>
  )
}

export default Banner
