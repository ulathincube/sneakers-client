import styles from "./Banner.module.css"
import { Link } from "react-router"

function Banner() {
  return (
    <article className={styles.wrapper}>
      <section className={styles.actions}>
        <div className={styles.details}>
          <h2 className={styles.title}>Nike x Adidas</h2>
          <p>Get the freshest pairs of sneakers in town!</p>
        </div>
        <div className={styles.container}>
          <Link to="/" className={styles.link}>
            Let's Go
          </Link>
        </div>
      </section>
    </article>
  )
}

export default Banner
