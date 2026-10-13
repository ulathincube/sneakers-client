import styles from "./ProductQuantity.module.css"

function ProductQuantity() {
  return (
    <section className={styles.wrapper}>
      <button className={styles.subtract}>-</button>
      <input type="number" className={styles.field} id="number" />
      <button className={styles.add}>+</button>
    </section>
  )
}

export default ProductQuantity
