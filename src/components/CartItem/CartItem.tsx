import styles from "./CartItem.module.css"

function CartItem() {
  return (
    <>
      <div className={styles.box}>
        <img className={styles.image} src="" alt="product photo" />
      </div>
      <div className={styles.name}>
        <h2 className={styles.title}>Product name</h2>
        <p className={styles.description}>Short description</p>
      </div>
      <div className={styles.price}>
        <p className={styles.number}>$55</p>
        <p className={styles.info}>Import duties not included</p>
      </div>
      <div className={styles.sizing}>
        <p className={styles.size}>Medium</p>
        <p className={styles.quantity}>5</p>
        <button className={styles.wish}>Move to Wishlist</button>
      </div>
    </>
  )
}

export default CartItem
