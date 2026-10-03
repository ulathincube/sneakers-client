import styles from "./Product.module.css"
import { Link } from "react-router"

interface Props {
  id: string
  name: string
  category: string
  price: number
  url: string
}

function Product({ id, url, name, category, price }: Props) {
  return (
    <li className={styles.wrapper}>
      <Link to={`/sneakers/${id}`} className={styles.link}>
        <article className={styles.container}>
          <img className={styles.image} src={url} alt={name} />
        </article>

        <article className={styles.details}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.category}>{category}</p>
          <p className={styles.price}>${price}</p>
        </article>
      </Link>
    </li>
  )
}

export default Product
