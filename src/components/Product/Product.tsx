import styles from "./Product.module.css"
import { Link } from "react-router"

function Product() {
  return (
    <li className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        <span className={styles.container}>
          <img
            className={styles.image}
            src="/assets/images/nike-sneakers.webp"
          />
        </span>
      </Link>
      <article className={styles.details}>
        <h3 className={styles.title}>Nike Sneakers</h3>
        <p className={styles.category}>Trainers</p>
        <p className={styles.price}>200</p>
      </article>
    </li>
  )
}

export default Product
