import styles from "./CartItem.module.css"

interface Props {
  url: string
  name: string
  price: number
}

function CartItem({ url, name, price }: Props) {
  return (
    <>
      <div className={styles.box}>
        <img className={styles.image} src={url} alt="product photo" />
      </div>
      <div className={styles.name}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>Men's Shoes</p>
        <p className={styles.more}>White</p>
        <p className={styles.size}>
          <span className={styles.sizing}>Size M 9 / W 10.5</span>
          <span className={styles.quantity}>Quantity 1</span>
        </p>
      </div>
      <div className={styles.price}>
        <p className={styles.number}>${price}</p>
      </div>
    </>
  )
}

export default CartItem
