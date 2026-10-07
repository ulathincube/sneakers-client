import styles from "./MobileProduct.module.css"
import { Link } from "react-router"
import { useState } from "react"

interface Picture {
  id: string
  url: string
}

interface Props {
  images: Picture[]
  product: string
  price: number
}

function MobileProduct({ images, product, price }: Props) {
  const [imageUrl, setImageUrl] = useState<string>(images[0].url)

  return (
    <main className={styles.wrapper}>
      <figure className={styles.box}>
        <img src={imageUrl} alt={product} className={styles.image} />
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
      <article className={styles.container}>
        <button className={styles.bag}>Add to Bag</button>
      </article>
    </main>
  )
}

export default MobileProduct
