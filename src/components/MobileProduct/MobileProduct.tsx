import styles from "./MobileProduct.module.css"
import { Link } from "react-router"

interface Props {
  url: string
  product: string
  price: number
}

function MobileProduct({ url, product, price }: Props) {
  return (
    <main className={styles.wrapper}>
      <figure className={styles.box}>
        <img src={url} alt={product} className={styles.image} />
      </figure>
      <article className={styles.details}>
        <h3 className={styles.title}>{product}</h3>
        <p className={styles.description}>{product}</p>
        <p className={styles.price}>${price}</p>
      </article>
      <article className={styles.sizing}>
        <h3 className={styles.heading}>Size</h3>
        <select className={styles.select}>
          <option value="">Please select a size</option>
        </select>
        <Link className={styles.link} to="/">
          Size Guide
        </Link>
      </article>
      <button className={styles.bag}>Add to Bag</button>
    </main>
  )
}

export default MobileProduct
